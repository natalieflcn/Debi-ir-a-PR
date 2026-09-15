const mongoose = require("mongoose");

const badgeCollectionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    badges: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Badge",
        default: [],
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

// Query Middleware

badgeCollectionSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "_id name" }).populate({
    path: "badges",
    select: "_id name",
  });
});

const BadgeCollection = mongoose.model(
  "BadgeCollection",
  badgeCollectionSchema,
);

module.exports = BadgeCollection;
