const express = require("express");
const Exploration = require("../models/Exploration");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllExplorations = catchAsync(async (req, res, next) => {
  // EXECUTE QUERY
  const features = new APIFeatures(Exploration.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const explorations = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: explorations.length,
    data: { explorations },
  });
});

exports.getExploration = catchAsync(async (req, res, next) => {
  const exploration = await Exploration.findOne({
    _id: req.params.id,
  });

  if (!exploration)
    return next(new AppError("No exploration found with that ID.", 404));

  res.status(200).json({ status: "success", data: { exploration } });
});

exports.createExploration = catchAsync(async (req, res, next) => {
  const newExploration = await Exploration.create(req.body);

  res
    .status(201)
    .json({ status: "success", data: { exploration: newExploration } });
});

exports.updateExploration = catchAsync(async (req, res, next) => {
  const exploration = await Exploration.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true },
  );

  if (!exploration)
    return next(new AppError("No exploration found with that ID.", 404));

  res.status(200).json({ status: "success", data: { exploration } });
});

exports.deleteExploration = catchAsync(async (req, res, next) => {
  const exploration = await Exploration.findOneAndDelete({
    _id: req.params.id,
  });

  console.log(exploration);
  if (!exploration)
    return next(new AppError("No exploration found with that ID.", 404));

  res.status(204).json({ status: "success", data: null });
});
