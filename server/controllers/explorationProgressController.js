const express = require("express");
const ExplorationProgress = require("../models/ExplorationProgress");
const Exploration = require("../models/Exploration");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const User = require("../models/User");

// Admin Exploration Progress Routes (Return all Exploration Progress objects -- no specific exploration or user)
exports.getAllExplorationProgress = factory.getAll(ExplorationProgress);

// User Exploration Progress Routes (Return all Exploration Progress objects for a specific user)

exports.getUserExplorationProgress = factory.getAll(
  ExplorationProgress,
  (req) => ({
    user: req.params.userId,
  }),
);

// Exploration Progress Routes (Return Exploration Progress object for specific exploration -- as the logged in user)

// exports.getMyExplorationProgress = factory.getOne(
//   ExplorationProgress,
//   (req) => ({
//     user: req.user.id,
//     exploration: req.params.explorationId,
//   }),
// );

exports.getMyExplorationProgress = catchAsync(async (req, res, next) => {
  let query = ExplorationProgress.findOne({
    user: req.user.id,
    exploration: req.params.explorationId,
  });

  const doc = await query;

  // if (!doc) return next(new AppError("No document found with that ID.", 404));

  res.status(200).json({ status: "success", data: { data: doc || null } });
});

exports.createExplorationProgress = factory.createOne(
  ExplorationProgress,
  (req) => ({
    user: req.user._id,
    exploration: req.params.explorationId,
  }),
);

exports.deleteExplorationProgress = factory.deleteOne(
  ExplorationProgress,
  (req) => ({ user: req.user._id, exploration: req.params.explorationId }),
);

exports.addExplorationProgressVisit = catchAsync(async (req, res, next) => {
  console.log("updateexplorationprogres running");
  // Retrieving Existing Documents and Related Data
  const progress = await ExplorationProgress.findOne({
    user: req.user.id,
    exploration: req.params.explorationId,
  });

  if (!progress)
    return next(
      new AppError("No Exploration Progress found with that ID.", 404),
    );

  const exploration = await Exploration.findById(
    req.params.explorationId,
  ).select("locations");

  console.log(progress.visitLog);
  if (!exploration)
    return next(new AppError("No Exploration found with that ID.", 404));

  // Ensure No Duplicate Location Visits
  const isAlreadyVisited = progress?.visitLog.some(
    (visit) => visit.location === req.params.locationId,
  );

  if (isAlreadyVisited)
    return next(new AppError("This location has already been visited ", 400));

  // Updating Exploration Progress Data
  progress.visitLog.push({
    location: req.params.locationId,
    visitedAt: new Date(),
  });

  // Updating Exploration Progress Dervied Data
  if (progress.visitLog.length === exploration.locations.length) {
    progress.status = "completed";
    progress.completedAt = new Date();
  } else {
    progress.status = "in_progress";
  }

  progress.lastVisitedAt = new Date();

  await progress.save();

  res.status(200).json({ status: "success", data: { data: progress } });
});

exports.deleteExplorationProgressVisit = catchAsync(async (req, res, next) => {
  // Retrieving Existing Exploration Progress
  const progress = await ExplorationProgress.findOne({
    user: req.user.id,
    exploration: req.params.explorationId,
  });

  if (!progress)
    next(new AppError("No exploration progress found with that ID.", 404));

  // Updating Exploration Progress Visit Log
  const filteredVisits = progress.visitLog.filter(
    (visit) => visit.location === req.params.locationId,
  );
  console.log("PROGRESS VISIT LOG");
  console.log(progress.visitLog);
  console.log("FILTERED VISITS");
  console.log(filteredVisits);

  progress.visitLog = filteredVisits;

  // Updating Exploration Progress Derived Data
  progress.status = "in_progress";

  const datesVisited = progress.visitLog.map((visit) => visit.visitedAt);
  const lastDateVisited =
    datesVisited.length > 0 ? new Date(Math.max(...datesVisited)) : null;

  progress.lastVisitedAt = lastDateVisited;
  console.log("DATES VISITED");
  console.log(datesVisited);
  console.log("LAST VISITED AT");
  console.log(lastDateVisited);
  await progress.save();

  res.status(200).json({ status: "success", data: { data: progress } });
});

exports.deleteExplorationProgress = factory.deleteOne(
  ExplorationProgress,
  (req) => ({
    user: req.user._id,
    exploration: req.params.explorationId,
  }),
);
// exports.getUserExplorationProgress = catchAsync(async (req, res, next) => {
//   console.log(req.params);
//   const explorationProgress = await ExplorationProgress.find({
//     user: req.params.userId,
//   });

//   if (!explorationProgress)
//     return next(
//       new AppError("No exploration progress found for this user.", 404),
//     );

//   res.status(200).json({
//     status: "success",
//     results: explorationProgress.length,
//     data: { explorationProgress },
//   });
// });

// exports.getMyExplorationProgress = catchAsync(async (req, res, next) => {
//   const explorationProgress = await ExplorationProgress.findOne({
//     user: req.user._id,
//     exploration: req.params.explorationId,
//   });

//   if (!explorationProgress)
//     return next(
//       new AppError(
//         "No exploration progress found for this user and exploration.",
//         404,
//       ),
//     );

//   res.status(200).json({ status: "success", data: { explorationProgress } });
// });

// exports.createExplorationProgress = catchAsync(async (req, res, next) => {
//   const newExplorationProgress = await ExplorationProgress.create({
//     exploration: req.params.explorationId,
//     user: req.user._id,
//     ...req.body,
//   });

//   res.status(201).json({
//     status: "success",
//     data: { explorationProgress: newExplorationProgress },
//   });
// });

// exports.updateExplorationProgress = catchAsync(async (req, res, next) => {
//   const explorationProgress = await ExplorationProgress.findOneAndUpdate(
//     { user: req.user._id, exploration: req.params.explorationId },
//     req.body,
//     { new: true, runValidators: true },
//   );

//   if (!explorationProgress)
//     return next(
//       new AppError(
//         "No exploration progress found for this user and exploration.",
//         404,
//       ),
//     );

//   res.status(200).json({ status: "success", data: { explorationProgress } });
// });
