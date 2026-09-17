const express = require("express");
const authController = require("../controllers/authController");
const explorationProgressController = require("../controllers/explorationProgressController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(
    authController.protect,
    // authController.restrictTo("explorer"),
    explorationProgressController.getExplorationProgress,
  )
  .post(
    authController.protect,
    // authController.restrictTo("explorer"),
    explorationProgressController.createExplorationProgress,
  )
  .patch(
    authController.protect,
    // authController.restrictTo("explorer"),
    explorationProgressController.updateExplorationProgress,
  );

// router
//   .route("/")
//   .get(
//     authController.protect,
//     authController.restrictTo("ambassador", "admin"),
//     explorationProgressController.getAllExplorationProgress,
//   );

// router
//   .route("/")
//   .get(
//     authController.protect,
//     explorationProgressController.getExplorationProgress,
//   );
// router
//   .route("/:explorationId/explorationProgress")
//   .post(explorationProgressController.createExplorationProgress)
//   .patch(explorationProgressController.updateExplorationProgress);

module.exports = router;
