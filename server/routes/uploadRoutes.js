const express = require("express");
const authController = require("../controllers/authController");
const uploadController = require("../controllers/uploadController");

const router = express.Router();

router.use(authController.protect);

router.post(
  "/exploration-signature/:explorationId",
  authController.protect,
  authController.restrictTo("admin", "ambassador"),
  uploadController.signExplorationUpload,
);

router.post(
  "/user-signature",
  authController.protect,
  uploadController.signUserUpload,
);

module.exports = router;
