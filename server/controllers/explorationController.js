const express = require("express");
const Exploration = require("../models/Exploration");
const factory = require("./handlerFactory");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const ExplorationProgress = require("../models/ExplorationProgress");
const User = require("../models/User");
const geocodingService = require("../services/geocodingService");

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// Exploration Routes
exports.getAllExplorationData = factory.getAll(Exploration, (req) => {
  const f = {};
  const { search, tag } = req.query;

  if (search) f.name = { $regex: `^${escapeRegex(search)}`, $options: "i" };
  if (tag && tag !== "all")
    f.tags = { $regex: escapeRegex(tag), $options: "i" };

  return f;
});

exports.getExploration = factory.getOne(Exploration, (req) => ({
  slug: req.params.id,
}));

exports.createExploration = factory.createOne(Exploration, (req) => ({
  createdBy: req.user.id,
}));

exports.getNewExplorationId = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { id: new mongoose.Types.ObjectId().toString() },
  });
};
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

  console.log("deleting exploration");
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

const ITEMS_PER_PAGE = 12;

exports.aliasExplorationsSummary = (req, res, next) => {
  //   req.query.filter = {tags: }

  const query = {
    ...req.query,
    sort: req.query.sort || "-createdAt",
    fields:
      "_id,slug,name,tagline,locations,numStops,cities,headerImage,tags,featured,createdBy",
    limit: String(ITEMS_PER_PAGE),
    page: req.query.page || "1",
  };

  Object.defineProperty(req, "query", {
    value: query,
    writable: true,
    configurable: true,
    enumerable: true,
  });

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

// Badge Collection
exports.aliasBadges = (req, res, next) => {
  const query = {
    ...req.query,
    fields: "badge",
    limit: "500",
  };

  Object.defineProperty(req, "query", {
    value: query,
    writable: true,
    configurable: true,
    enumerable: true,
  });

  next();
};

exports.getAllBadges = factory.getAll(Exploration, (req) => {});

// Geocoding API
exports.validateExplorationLocation = catchAsync(async (req, res, next) => {
  const result = await geocodingService.geocodeAddress({
    street: req.body.street,
    city: req.body.city,
    zipcode: req.body.zipcode,
  });

  res.status(200).json({ status: "success", data: { data: result } });
});
