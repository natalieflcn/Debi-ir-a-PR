const mongoose = require("mongoose");
const imageSchema = require("./Image");

const badgeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A badge name is required."],
    },
    description: {
      type: String,
      required: [true, "A badge description is required."],
    },
    image: {
      type: [imageSchema],
      default: [],
      validate: {
        validator: function (value) {
          return value.length <= 1;
        },
        message: "An exploration can only have one header image.",
      },
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);



module.exports = badgeSchema;
