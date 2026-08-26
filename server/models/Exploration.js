const mongoose = require("mongoose");

const explorationSchema = mongoose.Schema({
  displayId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "An exploration name is required."],
    unique: true,
  },
  tagline: {
    type: String,
    required: [true, "An exploration tagline is required."],
  },
  description: {
    type: String,
    required: [true, "An exploration description is required."],
  },
  startingCity: {
    type: String,
    required: [true, "A city is required."],
  },
  headerImage: {
    type: Array,
    // required: [true, "An exploration header image is required."],
  },
  numStops: { type: Number },
  tags: { type: Array },
  featured: { type: Boolean, default: false },
  badge: { type: Object },
  locations: { type: Array },
  images: { type: Array },
  createdBy: { type: String },
  createdAt: { type: String },
  updatedBy: { type: String },
  updatedAt: { type: String },
});

const Exploration = mongoose.model("Exploration", explorationSchema);

module.exports = Exploration;
