// const express = require("express");
// const Exploration = require("../models/Exploration");
// const APIFeatures = require("../utils/apiFeatures");
// const catchAsync = require("../utils/catchAsync");
// const AppError = require("../utils/appError");

// exports.getExploration = catchAsync(async (req, res, next) => {
//   const exploration = await Exploration.findOne(req.params.id).populate({
//     path: "badge",
//     select: "-description -type",
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
