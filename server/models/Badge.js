const mongoose = require("mongoose");

const badgeSchema = mongoose.Schema({
  displayId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "A badge name is required."],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "A badge description is required."],
  },
  image: { type: String, required: [true, "A badge icon is required."] },
  explorationId: {
    type: Number,
    default: null,
  },
  type: { type: String },
  threshold: { type: Number, default: null },
});

const Badge = mongoose.model("Badge", badgeSchema);

module.exports = Badge;
