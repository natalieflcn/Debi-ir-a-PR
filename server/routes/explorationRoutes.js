const express = require("express");
const explorationController = require("../controllers/explorationController");
const authController = require("../controllers/authController");
const explorationProgressRouter = require("./explorationProgressRoutes");

const router = express.Router();

// Flat Routes
router
  .route("/")
  .get(authController.protect, explorationController.getAllExplorationData)
  .post(explorationController.createExploration);

router
  .route("/summary")
  .get(
    authController.protect,
    explorationController.aliasExplorationsSummary,
    explorationController.getAllExplorationData,
  );

router
  .route("/:id")
  .get(explorationController.getExploration)
  .patch(explorationController.updateExploration)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "ambassador"),
    explorationController.deleteExploration,
  );

// router
//   .route("/:explorationId/badge")
//   .get(explorationController.getExplorationBadge);
router.use(
  "/:explorationId/my-exploration-progress",
  explorationProgressRouter,
);

module.exports = router;
