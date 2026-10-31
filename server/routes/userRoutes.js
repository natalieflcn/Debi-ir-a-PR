const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const explorationProgressAdminRouter = require("./explorationProgressAdminRoutes");

const router = express.Router();

router.post("/signup/explorer", authController.signupExplorer);
router.post("/signup/ambassador", authController.signupAmbassador);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

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

  userController.getMe,
  userController.getUser, //TODO
);

router.patch(
  "/updateMe",

  userController.updateMe,
);
router.delete(
  "/deleteMe",

  userController.deleteMe,
);

router.use(authController.restrictTo("admin", "ambassador"));

router.get(
  "/",

  userController.getAllUsers,
);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/:id/updatePassword").patch(authController.updateUserPassword);

router.use(
  "/:userId/user-exploration-progress",
  explorationProgressAdminRouter,
);

module.exports = router;
