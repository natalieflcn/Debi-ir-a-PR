const express = require("express");
const explorationController = require("../controllers/explorationController");
const authController = require("../controllers/authController");
const explorationProgressRouter = require("./explorationProgressRoutes");

const router = express.Router();

router.use(authController.protect);
// Flat Routes
router.route("/").get(explorationController.getAllExplorationData).post(
  // authController.protect(),
  authController.restrictTo("admin", "ambassador"),
  explorationController.createExploration,
);

router.route("/summary").get(
  // authController.protect(),
  explorationController.aliasExplorationsSummary,
  explorationController.getAllExplorationData,
);

// router.use();

router
  .route("/:id")
  .get(explorationController.getExploration)
  .patch(
    // authController.protect,
    authController.restrictTo("admin", "ambassador"),
    explorationController.updateExploration,
  )
  .delete(
    // authController.protect,
    authController.restrictTo("admin", "ambassador"),
    explorationController.deleteExploration,
  );

router
  .route("/:explorationId/locations/:locationId")
  .patch(
    authController.restrictTo("admin", "ambassador"),
    explorationController.updateExplorationLocation,
  );
// router
//   .route("/:explorationId/badge")
//   .get(explorationController.getExplorationBadge);
router.use(
  "/:explorationId/my-exploration-progress",
  explorationProgressRouter,
);

module.exports = router;
