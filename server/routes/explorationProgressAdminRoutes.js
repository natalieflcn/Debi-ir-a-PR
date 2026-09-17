const express = require("express");
const authController = require("../controllers/authController");
const explorationProgressController = require("../controllers/explorationProgressController");

const router = express.Router();

router
  .route("/all")
  .get(
    authController.protect,
    explorationProgressController.getAllExplorationProgress,
  );

module.exports = router;
