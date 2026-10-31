const express = require("express");
const explorationController = require("../controllers/explorationController");
const authController = require("../controllers/authController");
const explorationProgressExplorerRouter = require("./explorationProgressExplorerRoutes");

const router = express.Router();

router.use(authController.protect);
// Flat Routes
router
  .route("/")
  .get(explorationController.getAllExplorationData)
  .post(
    authController.restrictTo("admin", "ambassador"),
    explorationController.createExploration,
  );

router
  .route("/summary")
  .get(
    explorationController.aliasExplorationsSummary,
    explorationController.getAllExplorationData,
  );

router
  .route("/getAllBadges")
  .get(explorationController.aliasBadges, explorationController.getAllBadges);

router
  .route("/validate-location")
  .post(
    authController.restrictTo("admin", "ambassador"),
    explorationController.validateExplorationLocation,
  );

router
  .route("/:id")
  .get(explorationController.getExploration)
  .patch(
    authController.restrictTo("admin", "ambassador"),
    explorationController.updateExploration,
  )
  .delete(
    authController.restrictTo("admin", "ambassador"),
    explorationController.deleteExploration,
  );

router
  .route("/:explorationId/locations/:locationId")
  .patch(
    authController.restrictTo("admin", "ambassador"),
    explorationController.updateExplorationLocation,
  )
  .delete(
    authController.restrictTo("admin", "ambassador"),
    explorationController.deleteExplorationLocation,
  );

router.use(
  "/:explorationId/my-exploration-progress",
  explorationProgressExplorerRouter,
);

module.exports = router;
