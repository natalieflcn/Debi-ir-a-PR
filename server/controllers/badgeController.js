const mongoose = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const Badge = require("../models/Badge");

exports.getAllBadges = catchAsync(async (req, res, next) => {
  const badges = await Badge.find();

  res
    .status(200)
    .json({ status: "success", results: badges.length, data: { badges } });
});

exports.createBadge = async (req, res, next) => {
  const newBadge = await Badge.create(req.body);

  res.status(201).json({ status: "success", data: { badge: newBadge } });
};
