const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup/explorer", authController.signupExplorer);
router.post("/signup/ambassador", authController.signupAmbassador);
