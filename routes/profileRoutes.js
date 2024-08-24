const express = require("express");
const profileController = require("../controllers/profileController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", authMiddleware, profileController.getProfile);
router.put("/profile", authMiddleware, profileController.updateProfile);

module.exports = router;
