const mongoose = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const Badge = require("../models/Badge");
const APIFeatures = require("../utils/apiFeatures");
const factory = require("./handlerFactory");

exports.getAllBadges = factory.getAll(Badge);
exports.getBadge = factory.getOne(Badge, (req) => ({
  exploration: req.params.explorationId,
}));
exports.createBadge = factory.createOne(Badge);
exports.updateBadge = factory.updateOne(Badge);
exports.deleteBadge = factory.deleteOne(Badge);

// exports.getAllBadges = catchAsync(async (req, res, next) => {
//   // const badges = await Badge.find();
//   const features = new APIFeatures(Badge.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();

//   const badges = await features.query;

//   res
//     .status(200)
//     .json({ status: "success", results: badges.length, data: { badges } });
// });

// exports.createBadge = catchAsync(async (req, res, next) => {
//   const newBadge = await Badge.create(req.body);

//   res.status(201).json({ status: "success", data: { badge: newBadge } });
// });
