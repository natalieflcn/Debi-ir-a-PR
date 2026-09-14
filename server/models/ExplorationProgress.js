const mongoose = require("mongoose");
const visitSchema = require("./Visit");

const explorationProgressSchema = new mongoose.Schema({
  user: {},
  exploration: {
    type: mongoose.Schema.ObjectId,
    ref: "Exploration",
    required: true,
  },
  locationsVisited: {
    type: [mongoose.Schema.ObjectId],
    ref: "Location",
    default: [],
  },
  status: {
    type: String,
    enum: ["not_started", "in_progress", "completed"],
    default: "not_started",
  },
  startedAt: { type: Date },
  lastVisitedAt: { type: Date },
  completedAt: { type: Date },
  visitLog: { type: [visitSchema], default: [] },
});

const ExplorationProgress = mongoose.model(
  "ExplorationProgress",
  explorationProgressSchema,
);

module.exports = ExplorationProgress;
