const mongoose = require("mongoose");

const explorationProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  exploration: {
    type: mongoose.Schema.ObjectId,
    ref: "Exploration",
    required: true,
  },
  locationsVisited: {
    type: [mongoose.Schema.ObjectId],
    default: [],
  },
  status: {
    type: String,
    enum: ["not_started", "in_progress", "completed"],
    default: "not_started",
  },
  lastVisitedAt: { type: Date },
  completedAt: { type: Date },
});

explorationProgressSchema.index({ user: 1, exploration: 1 }, { unique: true });

const ExplorationProgress = mongoose.model(
  "ExplorationProgress",
  explorationProgressSchema,
);

module.exports = ExplorationProgress;
