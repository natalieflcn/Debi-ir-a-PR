const mongoose = require("mongoose");
const slugify = require("slugify");
const constants = require("../utils/constants");
const locationSchema = require("./Location");
const badgeSchema = require("./Badge");

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
      enum: constants.PR_CITIES,
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
      enum: constants.EXPLORATION_TAGS,
      required: [true, "At least one exploration tag is required."],
    },
    featured: { type: Boolean, default: false },
    badge: {
      type: badgeSchema,
    },
    locations: {
      type: [locationSchema],
      default: [],
      validate: {
        validator: (arr) => arr.length <= 10,
        message: "An exploration can have at most 10 locations.",
      },
      validate: {
        validator: (arr) => arr.length > 0,
        message: "An exploration must have at least one location.",
      },
    },
    numStops: { type: Number },
    images: { type: [String], default: [] },
    // createdAt: { type: Date, default: Date.now },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // updatedAt: { type: Date },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);
// explorationSchema.virtual("numStops").get(function () {
//   return this.locations ? this.locations.length : undefined;
// });

// Middlewares
explorationSchema.pre("save", function () {
  this.slug = slugify(this.name, { lower: true });
  // this.numStops = this.locations.length;
});

// explorationSchema.pre("save", function () {
//   this.numStops = this.locations.length;
// });

explorationSchema.post(/^find/, function (docs, next) {
  if (!docs) return next();

  if (!Array.isArray(docs)) {
    docs.numStops = docs.locations.length;
  } else {
    docs.forEach((doc) => {
      console.log(doc);
      doc.numStops = doc.locations.length;
    });
  }

  // console.log(docs);
  next();
});

explorationSchema.post("find", function (docs, next) {
  if (!docs) return next();

  if (!Array.isArray(docs)) {
    docs.numStops = docs.locations.length;
  } else {
    docs.forEach((doc) => {
      console.log(doc);
      doc.numStops = doc.locations.length;
      doc.locations = undefined;
    });
  }

  // console.log(docs);
  next();
});

// explorationSchema.pre(/^find/, function () {
//   console.log(this);
//   this.populate({
//     path: "badge",
//     select: "-description -type",
//   });
// });

const Exploration = mongoose.model("Exploration", explorationSchema);

module.exports = Exploration;
