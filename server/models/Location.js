const mongoose = require("mongoose");
const slugify = require("slugify");
const { LOCATION_TAGS, PR_CITIES } = require("../utils/constants");

const locationSchema = new mongoose.Schema({
  slug: { type: String, index: true },
  explorationId: { type: mongoose.Schema.ObjectId, ref: "Exploration" },
  name: {
    type: String,
    minlength: [5, "A location name must have more than 5 characters."],
    maxlength: [40, "A location name must have less than 40 characters."],
    trim: true,
    required: [true, "A location name is required."],
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      enum: PR_CITIES,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    minlength: [
      50,
      "An exploration description must have more than 50 characters.",
    ],
    maxlength: [
      500,
      "An exploration description must have less than 500 characters.",
    ],
    trim: true,
    required: [true, "A location description is required."],
  },
  headerImage: {
    type: [String],
    required: [true, "A location header image is required."],
    validate: {
      validator: function (value) {
        return value.length <= 1;
      },
      message: "A location can only have one header image.",
    },
  },
  images: { type: [String], default: [] },
  tags: {
    type: [String],
    enum: LOCATION_TAGS,
    required: [true, "At least one location tag is required."],
  },
});

// Middleware
locationSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
});

// const Location = mongoose.model("Location", locationSchema);

module.exports = locationSchema;
