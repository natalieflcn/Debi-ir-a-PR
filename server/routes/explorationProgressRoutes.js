const express = require("express");
const authController = require("../controllers/authController");
const explorationProgressController = require("../controllers/explorationProgressController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "ambassador"),
    explorationProgressController.getAllExplorationProgress,
  );

router
  .route("/me")
  .get(
    authController.protect,
    authController.restrictTo("explorer"),
    explorationProgressController.getAllMyExplorationProgress,
  );
module.exports = router;
