const express = require("express");
const authController = require("../controllers/authController");
const explorationProgressController = require("../controllers/explorationProgressController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController("admin", "ambassador"),
    explorationProgressController.getAllExplorationProgress,
  );

module.exports = router;
