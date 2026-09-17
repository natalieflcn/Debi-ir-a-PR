const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

const filterRequestBody = (body, ...allowedFields) => {
  const filteredRequestBody = {};

  Object.keys(body).forEach((el) => {
    if (allowedFields.includes(el)) filteredRequestBody[el] = body[el];
  });

  return filteredRequestBody;
};

// exports.getUser = catchAsync(async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   if (!user) return next(new AppError("No user found with that ID.", 404));

//   await user.populateUserData();

//   res.status(200).json({ status: "success", data: { user } });
// });

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = factory.getOne(User);

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

// exports.deleteMe = factory.deleteOne(User);

// exports.getAllUsers = catchAsync(async (req, res, next) => {
//   const features = new APIFeatures(User.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();

//   const users = await features.query;

//   res
//     .status(200)
//     .json({ status: "success", results: users.length, data: { users } });
// });

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({ status: "success", data: null });
});

exports.getAllUsers = factory.getAll(User);
