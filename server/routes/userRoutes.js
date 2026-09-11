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
  "/updateMyPassword",
  authController.protect,
  authController.updateMyPassword,
);

router.get("/", userController.getAllUsers);
router.patch("/updateMe", authController.protect, userController.updateMe);
router.delete("/deleteMe", authController.protect, userController.deleteMe);

module.exports = router;
