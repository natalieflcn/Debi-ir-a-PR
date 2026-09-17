const express = require("express");
const ExplorationProgress = require("../models/ExplorationProgress");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// Admin Exploration Progress Routes (Return all Exploration Progress objects -- no specific exploration or user)
exports.getAllExplorationProgress = factory.getAll(ExplorationProgress);

// User Exploration Progress Routes (Return all Exploration Progress objects for a specific user)
exports.getUserExplorationProgress = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const explorationProgress = await ExplorationProgress.find({
    user: req.params.userId,
  });

  if (!explorationProgress)
    return next(
      new AppError("No exploration progress found for this user.", 404),
    );

  res.status(200).json({ status: "success", data: { explorationProgress } });
});

// Exploration Progress Routes (Return Exploration Progress object for specific exploration -- as the logged in user)
exports.getMyExplorationProgress = catchAsync(async (req, res, next) => {
  const explorationProgress = await ExplorationProgress.findOne({
    user: req.user._id,
    exploration: req.params.explorationId,
  });

  if (!explorationProgress)
    return next(
      new AppError(
        "No exploration progress found for this user and exploration.",
        404,
      ),
    );

  res.status(200).json({ status: "success", data: { explorationProgress } });
});

exports.createExplorationProgress = catchAsync(async (req, res, next) => {
  const newExplorationProgress = await ExplorationProgress.create({
    exploration: req.params.explorationId,
    user: req.user._id,
    ...req.body,
  });

  res.status(201).json({
    status: "success",
    data: { explorationProgress: newExplorationProgress },
  });
});

exports.updateExplorationProgress = catchAsync(async (req, res, next) => {
  const explorationProgress = await ExplorationProgress.findOneAndUpdate(
    { user: req.user._id, exploration: req.params.explorationId },
    req.body,
    { new: true, runValidators: true },
  );

  if (!explorationProgress)
    return next(
      new AppError(
        "No exploration progress found for this user and exploration.",
        404,
      ),
    );

  res.status(200).json({ status: "success", data: { explorationProgress } });
});
