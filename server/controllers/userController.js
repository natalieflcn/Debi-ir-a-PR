const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const helpers = require("../utils/helpers");
const ExplorationProgress = require("../models/ExplorationProgress");

const filterRequestBody = (body, ...allowedFields) => {
  const filteredRequestBody = {};

  Object.keys(body).forEach((el) => {
    if (allowedFields.includes(el)) filteredRequestBody[el] = body[el];
  });

  return filteredRequestBody;
};
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

exports.getAllUsers = factory.getAll(User, (req) => {
  const f = {};
  const { search } = req.query;
  if (search) f.name = { $regex: `^${escapeRegex(search)}`, $options: "i" };
  return f;
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });

  if (!user) return next(new AppError("No user found with that ID.", 404));

  const completedExplorationsCount = await ExplorationProgress.countDocuments({
    user: req.user.id,
    status: "completed",
  });

  res.status(200).json({ status: "success", data: { data: user } });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

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
  const filteredBody = filterRequestBody(req.body, "name", "email", "avatar");

  // Update user
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: "success", data: { data: updatedUser } });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.user.id);

  res.status(204).json({ status: "success", data: null });
});

exports.deleteUser = factory.deleteOne(User);

exports.updateUser = catchAsync(async (req, res, next) => {
  const { role } = req.body;

  if (role && !["explorer", "ambassador", "admin"].includes(role)) {
    return next(new AppError("Invalid role provided.", 400));
  }

  if (role) req.body.title = helpers.capitalize(role);

  const doc = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!doc) return next(new AppError("No user found with that ID.", 404));

  res.status(200).json({ status: "success", data: { data: doc } });
});

exports.updateExplorerTitle = catchAsync(async (req, res, next) => {
  const completedExplorations = await ExplorationProgress.countDocuments({
    user: req.user.id,
    status: "completed",
  });

  const explorerTitle = getExplorerTitle(completedExplorations);

  await User.findByIdAndUpdate(req.user.id, { title: explorerTitle });
});
