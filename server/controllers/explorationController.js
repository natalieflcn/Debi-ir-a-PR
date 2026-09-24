const express = require("express");
const Exploration = require("../models/Exploration");
const factory = require("./handlerFactory");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// Exploration Routes
exports.getAllExplorationData = factory.getAll(Exploration);

exports.getExploration = factory.getOne(Exploration, (req) => ({
  slug: req.params.id,
}));

exports.createExploration = factory.createOne(Exploration, null);

exports.updateExploration = factory.updateOne(Exploration);
exports.deleteExploration = factory.deleteOne(Exploration);

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
  ];

  // Updating Location
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      location[field] = req.body[field];
    }
  });

  // Updating Exploration
  exploration.cities = exploration.locations.map((loc) => loc.city);
  if (req.body.updatedBy) exploration.updatedBy = req.body.updatedBy;

  await exploration.save({ validateModifiedOnly: true });

  res.status(200).json({ status: "success", data: { data: location } });
});

// Exploration/Badge Routes
// exports.createExplorationBadge = catchAsync(async (req, res, next) => {
//   const badge = await Badge.create(req.body);

//   const exploration = Exploration.find();
//   if (!exploration.badge)
//     next(new AppError("No badge found for that exploration.", 404));

//   res.status(200).json({ status: "success", data: exploration.badge });
// });

// exports.getAllExplorations = catchAsync(async (req, res, next) => {
//   // EXECUTE QUERY
//   const features = new APIFeatures(Exploration.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();

//   const explorations = await features.query;

//   // SEND RESPONSE
//   res.status(200).json({
//     status: "success",
//     results: explorations.length,
//     data: { explorations },
//   });
// });

// exports.getExploration = catchAsync(async (req, res, next) => {
//   const exploration = await Exploration.findOne({
//     _id: req.params.id,
//   }).populate({
//     path: "badge",
//     select: "-description -type -__v",
//   });

//   if (!exploration)
//     return next(new AppError("No exploration found with that ID.", 404));

//   res.status(200).json({ status: "success", data: { exploration } });
// });

// exports.createExploration = catchAsync(async (req, res, next) => {
//   const newExploration = await Exploration.create(req.body);

//   res
//     .status(201)
//     .json({ status: "success", data: { exploration: newExploration } });
// });

// exports.updateExploration = catchAsync(async (req, res, next) => {
//   const exploration = await Exploration.findOneAndUpdate(
//     { _id: req.params.id },
//     req.body,
//     { new: true, runValidators: true },
//   );

//   if (!exploration)
//     return next(new AppError("No exploration found with that ID.", 404));

//   res.status(200).json({ status: "success", data: { exploration } });
// });

// exports.deleteExploration = catchAsync(async (req, res, next) => {
//   const exploration = await Exploration.findOneAndDelete({
//     _id: req.params.id,
//   });

//   if (!exploration)
//     return next(new AppError("No exploration found with that ID.", 404));

//   res.status(204).json({ status: "success", data: null });
// });
