const express = require("express");
const authController = require("../controllers/authController");
const explorationProgressController = require("../controllers/explorationProgressController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("explorer"),
    explorationProgressController.getUserExplorationProgress,
  );

module.exports = router;
