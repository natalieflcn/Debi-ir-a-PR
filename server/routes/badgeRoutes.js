const express = require("express");
const authController = require("../controllers/authController");
const badgeController = require("../controllers/badgeController");

const router = express.Router();

router
  .route("/")
  .get(badgeController.getAllBadges)
  .post(
    authController.protect,
    authController.restrictTo("ambassador", "admin"),
    badgeController.createBadge,
  );

module.exports = router;
