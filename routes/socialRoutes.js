const express = require("express");
const socialController = require("../controllers/socialController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/follow/:userId", authMiddleware, socialController.followUser);
router.get("/following", authMiddleware, socialController.getFollowing);
router.get("/followers", authMiddleware, socialController.getFollowers);

module.exports = router;
