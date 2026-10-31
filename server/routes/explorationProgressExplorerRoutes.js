const express = require("express");
const authController = require("../controllers/authController");
const explorationProgressController = require("../controllers/explorationProgressController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect, authController.restrictTo("explorer"));

router
  .route("/")
  .get(explorationProgressController.getMyExplorationProgress)
  .post(explorationProgressController.createExplorationProgress)

  .delete(explorationProgressController.deleteExplorationProgress);

router
  .route("/locations/:locationId")
  .post(explorationProgressController.addExplorationProgressVisit)
  .delete(explorationProgressController.deleteExplorationProgressVisit);

router
  .route("/me")
  .get(explorationProgressController.getUserExplorationProgress);

module.exports = router;
