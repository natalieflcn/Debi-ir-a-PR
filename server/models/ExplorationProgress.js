const mongoose = require("mongoose");

const explorationProgressSchema = new mongoose.Schema({
  explorationId: {
    type: mongoose.Schema.ObjectId,
    ref: "Exploration",
    required: true,
  },
  locationsVisited: { type: [mongoose.Schema.ObjectId], ref: "Location" },
  status: { type: String, enum: ["not_started", "in_progress", "completed"] },
  startedAt: { type: Date },
  lastVisitedAt: { type: Date },
  completedAt: { type: Date },
});

const ExplorationProgress = mongoose.model(
  "ExplorationProgress",
  explorationProgressSchema,
);

module.exports = ExplorationProgress;
