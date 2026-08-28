const mongoose = require("mongoose");
const capitalize = require("../utils/helpers");

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true, index: true },
    name: {
      type: String,
      required: [true, "A user name is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "A user email is required."],
      lowercase: true,
      trim: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email."],
    },
    password: {
      type: String,
      required: [true, "A password is required."],
      select: false,
    },
    role: {
      type: String,
      enum: ["explorer", "ambassador", "admin"],
      required: true,
    },
    title: {
      type: String,
      trim: true,
      default: function () {
        if (!(this.role === "ambassador" || this.role === "admin"))
          return undefined;

        return capitalize(this.role);
      },
    },
    avatar: { type: String, trim: true },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
