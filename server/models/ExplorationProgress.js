const mongoose = require("mongoose");
const visitSchema = require("./Visit");

const explorationProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  exploration: {
    type: mongoose.Schema.ObjectId,
    ref: "Exploration",
    required: true,
  },
  visitLog: {
    type: [visitSchema],
    default: [],
  },
  status: {
    type: String,
    enum: ["in_progress", "completed"],
    default: "in_progress",
  },
  lastVisitedAt: { type: Date },
  completedAt: { type: Date },
});

// explorationProgressSchema.index({ user: 1, exploration: 1 }, { unique: true });
explorationProgressSchema.index({ user: 1, exploration: 1 }, { unique: true });

explorationProgressSchema.pre("save", function () {
  console.log(this.parent());
});

const ExplorationProgress = mongoose.model(
  "ExplorationProgress",
  explorationProgressSchema,
);

module.exports = ExplorationProgress;
