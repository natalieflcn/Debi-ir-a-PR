const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const filterRequestBody = (body, ...allowedFields) => {
  const filteredRequestBody = {};

  Object.keys(body).forEach((el) => {
    if (allowedFields.includes(el)) filteredRequestBody[el] = body[el];
  });

  return filteredRequestBody;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res
    .status(200)
    .json({ status: "success", results: users.length, data: { users } });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // Create error is user tries to update password
  if (req.body.password || req.body.passwordConfirm)
    next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400,
      ),
    );

  // Filter out unwanted fields from request body
  const filteredBody = filterRequestBody(req.body, "name", "email");

  // Update user
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: "success", data: { user: updatedUser } });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  console.log(req.user);
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({ status: "success", data: null });
});
