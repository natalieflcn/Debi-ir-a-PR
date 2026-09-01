const mongoose = require("mongoose");

const earnedBadgeSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  badge: { type: mongoose.Schema.ObjectId, ref: "Badge", required: true },
  earnedAt: { type: Date, default: Date.now },
});

const EarnedBadge = mongoose.model("EarnedBadge", earnedBadgeSchema);

module.exports = EarnedBadge;
