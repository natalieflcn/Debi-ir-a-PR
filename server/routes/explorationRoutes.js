const express = require("express");
const explorationController = require("../controllers/explorationController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, explorationController.getAllExplorations)
  .post(explorationController.createExploration);

router
  .route("/:id")
  .get(explorationController.getExploration)
  .patch(explorationController.updateExploration)
  .delete(explorationController.deleteExploration);

module.exports = router;
