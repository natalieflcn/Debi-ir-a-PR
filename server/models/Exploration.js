const mongoose = require("mongoose");

const explorationSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      index: true,
    },
    name: {
      type: String,
      minlength: [5, "An exploration name must have more than 5 characters."],
      maxlength: [40, "An exploration name must have less than 40 characters."],
      trim: true,
      unique: true,
      required: [true, "An exploration name is required."],
    },
    tagline: {
      type: String,
      minlength: [
        15,
        "An exploration tagline must have more than 15 characters.",
      ],
      maxlength: [
        175,
        "An exploration tagline must have less than 175 characters.",
      ],
      trim: true,
      required: [true, "An exploration tagline is required."],
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
      required: [true, "An exploration description is required."],
    },
    cities: {
      type: [String],
      default: [],
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
    // numStops: { type: Number },
    tags: {
      type: [String],
      required: [true, "At least one exploration tag is required."],
    },
    featured: { type: Boolean, default: false },
    badge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Badge",
    },
    // locations: {
    //   type: [mongoose.Schema.Types.ObjectId],
    //   ref: "Location",
    //   default: [],
    // },
    images: { type: [String], default: [] },
    // createdAt: { type: Date, default: Date.now },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // updatedAt: { type: Date },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

explorationSchema.virtual("numStops").get(function () {
  return 5;
});

const Exploration = mongoose.model("Exploration", explorationSchema);

module.exports = Exploration;
