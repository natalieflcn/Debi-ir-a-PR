const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  locationId: { type: String, unique: true, index: true },
  explorationId: { type: mongoose.Schema.ObjectId, ref: "Exploration" },
  name: { type: String, required: [true, "A location name is required."] },
  address: {},
  description: {
    type: String,
    required: [true, "A location description is required."],
  },
  headerImage: {
    type: [String],
    required: [true, "A location header image is required."],
    validator: {
      validator: function (value) {
        return value.length <= 1;
      },
      message: "A location can only have one header image.",
    },
  },
  images: { type: [String], default: [] },
  tags: {
    type: [String],
    required: [true, "At least one location tag is required."],
  },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
