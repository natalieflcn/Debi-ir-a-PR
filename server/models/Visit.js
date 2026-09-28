const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema(
  {
    location: { type: mongoose.Schema.ObjectId, required: true },
    visitedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

module.exports = visitSchema;
