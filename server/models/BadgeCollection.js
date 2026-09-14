const mongoose = require("mongoose");

const badgeCollectionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    collection: {
      badge: { type: [mongoose.Schema.ObjectId], ref: "Badge", default: [] },
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const BadgeCollection = mongoose.model(
  "BadgeCollection",
  badgeCollectionSchema,
);

module.exports = BadgeCollection;
