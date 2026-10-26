const express = require("express");
const authController = require("../controllers/authController");
const uploadController = require("../controllers/uploadController");

const router = express.Router();

router.use(authController.protect);

router.post("/user-signature", uploadController.signUserUpload);

router.use(authController.restrictTo("admin", "ambassador"));

router.post("/exploration-signature", uploadController.signExplorationUpload);

// router.post(
//   "/badge-signature",
//   uploadController.signExplorationUpload,
// );

router.post("/user-signature/:userId", uploadController.signUserUpload);
module.exports = router;
