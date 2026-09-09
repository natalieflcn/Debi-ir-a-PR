const mongoose = require("mongoose");
const validator = require("validator");
const capitalize = require("../utils/helpers");
const bcrypt = require("bcryptjs");

// Schema Definition
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
    passwordChangedAt: Date,
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

// Middleware
userSchema.pre("save", async function () {
  if (!this.isModified()) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

// Instance Methods
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.isPasswordChanged = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const passwordChangedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );

    return passwordChangedTimestamp < JWTTimestamp;
  }

  return false;
};

// Model Definition
const User = mongoose.model("User", userSchema);

module.exports = User;

// check if you can login with no token TODO
// check if you can login with token after manipulating token TODO
// check if you can login with token, after deleting user from mongo compass TODO
// check if you can login with token, after token expires -- change expires_in in env variables TODO
// check if you can login with token, after changing password
