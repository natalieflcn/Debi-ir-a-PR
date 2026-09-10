const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup/explorer", authController.signupExplorer);
router.post("/signup/ambassador", authController.signupAmbassador);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword,
);
router.get("/", userController.getAllUsers);

module.exports = router;
