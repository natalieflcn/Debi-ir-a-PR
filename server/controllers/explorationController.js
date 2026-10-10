const express = require("express");
const Exploration = require("../models/Exploration");
const factory = require("./handlerFactory");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const ExplorationProgress = require("../models/ExplorationProgress");
const User = require("../models/User");
const geocodingService = require("../services/geocodingService");
// Exploration Routes
exports.getAllExplorationData = factory.getAll(Exploration);

exports.getExploration = factory.getOne(Exploration, (req) => ({
  slug: req.params.id,
}));

exports.createExploration = factory.createOne(Exploration, (req) => ({
  createdBy: req.user.id,
}));

// exports.updateExploration = factory.updateOne(Exploration);

exports.updateExploration = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const exploration = await Exploration.findOne({ _id: id });

  if (!exploration)
    return next(new AppError("No exploration found with that ID.", 404));

  const allowedFields = [
    "name",
    "tagline",
    "headerImage",
    "description",
    "images",
    "tags",
    "locations",
    "badge",
    "featured",
  ];

  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      exploration[field] = req.body[field];
    }
  });

  exploration.cities = exploration.locations.map((loc) => loc.city);

  exploration.updatedBy = req.user.id;

  await exploration.save();

  res.status(200).json({ status: "success", data: { data: exploration } });
});

// exports.deleteExploration = factory.deleteOne(Exploration);

exports.deleteExploration = catchAsync(async (req, res, next) => {
  // Retrieving Exploration and related documents
  const exploration = await Exploration.findOne({ _id: req.params.id });

  if (!exploration)
    return next(new AppError("No exploration found with that ID", 404));

  const progress = await ExplorationProgress.find({
    exploration: exploration._id,
  }).select("user");

  const userIds = [...new Set(progress.map((item) => item.user.toString()))];

  // Deleting Related Exploration Progress objects
  await ExplorationProgress.deleteMany({ exploration: exploration._id });

  // Deleting Exploration
  await exploration.deleteOne();

  // Updating Explorer Titles
  await Promise.all(
    userIds.map(async (userId) => {
      const user = await User.findById(userId);

      if (user) await user.updateUserTitle(userId);
    }),
  );

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.aliasExplorationsSummary = (req, res, next) => {
  //   req.query.filter = {tags: }

  req.query.sort = req.query.sort || "-createdAt";
  req.query.fields =
    "_id,slug,name,tagline,locations,numStops,cities,headerImage,tags";
  req.query.limit = "2";
  req.query.page = req.query.page || 1;

  next();
};

// Exploration/Location Routes
exports.updateExplorationLocation = catchAsync(async (req, res, next) => {
  const { explorationId, locationId } = req.params;

  const exploration = await Exploration.findOne({ slug: explorationId });

  if (!exploration)
    return next(new AppError("No exploration found with that ID.", 404));

  const location = exploration.locations.find((loc) => loc.slug === locationId);

  if (!location)
    return next(new AppError("No location found with that ID.", 404));

  const allowedFields = [
    "name",
    "address",
    "city",
    "headerImage",
    "description",
    "images",
    "tags",
    "map",
  ];

  // Updating Location
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      location[field] = req.body[field];
    }
  });

  // Updating Exploration
  // exploration.cities = exploration.locations.map((loc) => loc.city);
  if (req.body.updatedBy) exploration.updatedBy = req.body.updatedBy;

  await exploration.save({ validateModifiedOnly: true });

  res.status(200).json({ status: "success", data: { data: location } });
});

exports.deleteExplorationLocation = catchAsync(async (req, res, next) => {
  const { explorationId, locationId } = req.params;

  const exploration = await Exploration.findOne({ slug: explorationId });

  if (!exploration)
    return next(new AppError("Exploration with that ID not found.", 404));

  if (!exploration.locations.some((loc) => loc.slug === locationId))
    return next(new AppError("Location with that ID not found.", 404));

  if (exploration.locations.length === 1)
    return next(
      new AppError(
        `An exploration cannot have zero locations. Please add more locations to the exploration before deleting ${exploration.locations.find((loc) => loc.slug === locationId).name}.`,
        400,
      ),
    );

  exploration.locations = exploration.locations.filter(
    (loc) => loc.slug !== locationId,
  );

  await exploration.save({ validateModifiedOnly: true });

  res.status(204).json({
    status: "success",
    data: { data: exploration },
  });
});

// Geocoding API
exports.validateExplorationLocation = catchAsync(async (req, res, next) => {
  console.log("CONTROLLER: validateExplorationLocationAddress");

  console.log(req.body);

  const result = await geocodingService.geocodeAddress({
    street: req.body.street,
    city: req.body.city,
    zipcode: req.body.zipcode,
  });

  console.log(result);
  res.status(200).json({ status: "success", data: { data: result } });
});
