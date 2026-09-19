const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const explorationProgressUserRouter = require("./explorationProgressUserRoutes");

const router = express.Router();

router.post("/signup/explorer", authController.signupExplorer);
router.post("/signup/ambassador", authController.signupAmbassador);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.use(authController.protect);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updateMyPassword,
);

router.get(
  "/me",
  // authController.protect,
  userController.getMe,
  userController.getUser, //TODO
);

router.patch(
  "/updateMe",
  // authController.protect,
  // authController.protect,
  userController.updateMe,
);
router.delete(
  "/deleteMe",
  // authController.protect,
  // authController.protect,
  userController.deleteMe,
);

router.use(authController.restrictTo("admin", "ambassador"));

router.get(
  "/",
  // authController.protect,
  // authController.restrictTo("admin", "ambassador"),
  userController.getAllUsers,
);

router.get(
  "/:id",
  // authController.protect,
  // authController.restrictTo("admin", "ambassador"),
  userController.getUser,
);

// router.get("/:userId/badgeCollection");

router.use("/:userId/user-exploration-progress", explorationProgressUserRouter);

module.exports = router;
