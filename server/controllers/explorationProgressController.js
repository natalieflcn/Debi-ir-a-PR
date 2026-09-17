const express = require("express");
const ExplorationProgress = require("../models/ExplorationProgress");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllExplorationProgress = catchAsync(async (req, res, next) => {
  console.log("running etAllExplorationProfess");
  let filter = {};

  if (req.params.explorationId)
    filter = { explorationId: req.params.explorationId };

  const explorationProgress = await ExplorationProgress.find(filter);

  res.status(200).json({ status: "success", data: { explorationProgress } });
});

exports.getExplorationProgress = catchAsync(async (req, res, next) => {
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
