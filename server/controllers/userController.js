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

// const getExplorerTitle = function (completedExplorations) {
//   if (completedExplorations <= 1) return "Baby Turista";
//   if (completedExplorations > 1 && completedExplorations <= 3)
//     return "Island Wanderer";
//   if (completedExplorations > 3 && completedExplorations <= 5)
//     return "Tropical Cruiser";
//   if (completedExplorations > 5 && completedExplorations <= 10)
//     return "Fluttering Mariposa";
//   if (completedExplorations > 10 && completedExplorations <= 15)
//     return "Coqui Crawler";
//   if (completedExplorations > 15 && completedExplorations <= 20)
//     return "Brutal Bouncer";
//   if (completedExplorations > 20 && completedExplorations <= 25)
//     return "Barrio Member";
//   if (completedExplorations > 25 && completedExplorations < 30)
//     return "Taino Trailblazer";
//   if (completedExplorations > 30 && completedExplorations <= 35)
//     return "Isla Veteran";
//   if (completedExplorations > 35) return "Boricua at Heart";
// };

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });

  if (!user) return next(new AppError("No user found with that ID.", 404));

  // console.log(user);
  // await user.populateUserData();

  // const userData = user.toObject();

  // if (user.role === "explorer") {
  //   userData.badgeCollection = user.explorationProgress
  //     .filter((progress) => progress.status === "completed")
  //     .map((progress) => progress.exploration.badge);
  // }

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

// exports.getUser = factory.getOne(User);

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

  res.status(200).json({ status: "success", data: { data: updatedUser } });
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
  await User.findByIdAndDelete(req.user.id);

  res.status(204).json({ status: "success", data: null });
});

exports.deleteUser = factory.deleteOne(User);

exports.getAllUsers = factory.getAll(User);

exports.updateUser = catchAsync(async (req, res, next) => {
  const { role } = req.body;

  if (role && !["explorer", "ambassador", "admin"].includes(role)) {
    return next(new AppError("Invalid role provided.", 400));
  }

  if (role) req.body.title = helpers.capitalize(role);

  const doc = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) return next(new AppError("No user found with that ID.", 404));

  res.status(200).json({ status: "success", data: { data: doc } });
});

// exports.updateUser = factory.updateOne(User);

exports.updateExplorerTitle = catchAsync(async (req, res, next) => {
  const completedExplorations = await ExplorationProgress.countDocuments({
    user: req.user.id,
    status: "completed",
  });

  const explorerTitle = getExplorerTitle(completedExplorations);

  await User.findByIdAndUpdate(req.user.id, { title: explorerTitle });
});
