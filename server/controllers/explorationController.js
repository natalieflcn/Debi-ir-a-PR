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
  console.log("aliasexploration running");
  req.query.sort = req.query.sort || "-createdAt";
  req.query.fields =
    "_id,slug,name,tagline,locations,numStops,cities,headerImage,tags";
  req.query.limit = "2";
  req.query.page = req.query.page || 1;
  console.log(req.query);
  next();
};

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
