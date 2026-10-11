const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const AppError = require("../utils/appError");
const Exploration = require("../models/Exploration");
const catchAsync = require("../utils/catchAsync");

const ALLOWED_FORMATS = "jpg,jpeg,png,webp";

const buildSignature = function (folder, options) {
  const timestamp = Math.round(Date.now() / 1000);

  console.log(options);
  const params = {
    timestamp,
    folder,
    allowed_formats: ALLOWED_FORMATS,
    ...options,
  };

  console.log("BUILD SIGNATURE");
  console.log(params, process.env.CLOUDINARY_SECRET);
  const signature = cloudinary.utils.api_sign_request(
    params,
    process.env.CLOUDINARY_SECRET,
  );

  return {
    signature,
    timestamp,
    folder,
    allowed_formats: ALLOWED_FORMATS,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    ...options,
  };
};

exports.signExplorationUpload = catchAsync(async (req, res, next) => {
  const { explorationId } = req.params;

  // Making sure the explorationId is a valid mongoDB object
  if (!mongoose.isValidObjectId(explorationId))
    return next(new AppError("Invalid exploration.", 400));

  res.status(200).json({
    status: "success",
    data: buildSignature(`explorations/${explorationId}`, {
      public_id: req.params.explorationId,
    }),
  });
});

exports.signUserUpload = (req, res) => {
  res.status(200).json({
    status: "success",
    data: buildSignature(`users`, { public_id: req.user.id, overwrite: true }),
  });
};
