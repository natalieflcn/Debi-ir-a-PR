const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  explorationId: { type: mongoose.Schema.ObjectId, ref: "Exploration" },
  locationId: { type: mongoose.Schema.ObjectId, ref: "Location" },
  visitedAt: { type: Date },
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;
