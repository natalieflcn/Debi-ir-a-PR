const mongoose = require("mongoose");

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
    image: { type: String, required: [true, "A badge icon is required."] },
    // exploration: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Exploration",
    //   default: null,
    // },
    // type: {
    //   type: String,
    //   enum: {
    //     values: ["completion", "milestone", "special"],
    //     message: "{VALUE} is not a valid badge type.",
    //   },
    // },
    // threshold: {
    //   type: Number,
    //   required: [
    //     function () {
    //       return this.type === "milestone";
    //     },
    //     "A threshold is required for milestone badges.",
    //   ],
    //   default: function () {
    //     return this.type === "special" ? null : undefined;
    //   },
    // },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

// Query Middleware

// badgeSchema.pre(/^find/, function (next) {
//   this.populate({ path: "exploration", select: "_id name " });
// });

const Badge = mongoose.model("Badge", badgeSchema);

module.exports = Badge;
