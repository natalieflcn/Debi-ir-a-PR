const mongoose = require("mongoose");

const earnedBadgeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  badgeId: { type: mongoose.Schema.ObjectId, ref: "Badge" },
  earnedAt: { type: Date },
});

const EarnedBadge = mongoose.model("EarnedBadge", earnedBadgeSchema);

module.exports = EarnedBadge;
