const mongoose = require("mongoose");
const validator = require("validator");
const capitalize = require("../utils/helpers");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email."],
      lowercase: true,
      trim: true,
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email."],
    },
    password: {
      type: String,
      required: [true, "Please provide a password."],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password."],
      minlength: 8,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords do not match.",
      },
      select: false,
    },
    role: {
      type: String,
      enum: ["explorer", "ambassador", "admin"],
      default: "explorer",
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

userSchema.pre("save", function (next) {
  if (!this.isModified()) return next();

  this.password = bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
