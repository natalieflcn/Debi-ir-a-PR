const express = require("express");
const authController = require("../controllers/authController");
const explorationProgressController = require("../controllers/explorationProgressController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect, authController.restrictTo("explorer"));

router
  .route("/")
  .get(
    // authController.protect,
    // authController.restrictTo("explorer"),
    explorationProgressController.getMyExplorationProgress,
  )
  .post(
    // authController.protect,
    // authController.restrictTo("explorer"),
    explorationProgressController.createExplorationProgress,
  )
  .patch(
    // authController.protect,
    // authController.restrictTo("explorer"),
    explorationProgressController.updateExplorationProgress,
  )
  .delete(
    // authController.protect,
    explorationProgressController.deleteExplorationProgress,
  );

router.route("/me").get(
  // authController.protect,
  // authController.restrictTo("explorer"),
  explorationProgressController.getUserExplorationProgress,
);

// router
//   .route("/all")
//   .get(explorationProgressController.getAllExplorationProgress);

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
