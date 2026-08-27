const mongoose = require("mongoose");

const explorationSchema = mongoose.Schema({
  explorationId: {
    type: String,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: [true, "An exploration name is required."],
    trim: true,
  },
  tagline: {
    type: String,
    required: [true, "An exploration tagline is required."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "An exploration description is required."],
    trim: true,
  },
  startingCity: {
    type: String,
    required: [true, "A city is required."],
  },
  headerImage: {
    type: [String],
    default: [],
    validate: {
      validator: function (value) {
        return value.length <= 1;
      },
      message: "An exploration can only have one header image.",
    },
    required: [true, "A header image is required."],
  },
  numStops: { type: Number },
  tags: {
    type: [String],
    required: [true, "At least one exploration tag is required."],
  },
  featured: { type: Boolean, default: false },
  badge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Badge",
    required: [true, "An exploration badge is required."],
  },
  locations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    default: [],
  },
  images: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updatedAt: { type: Date },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Exploration = mongoose.model("Exploration", explorationSchema);

module.exports = Exploration;
