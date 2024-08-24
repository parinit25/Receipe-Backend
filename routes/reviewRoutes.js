const express = require("express");
const reviewController = require("../controllers/reviewController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/:recipeId", authMiddleware, reviewController.addReview);
router.get("/:recipeId", reviewController.getReviews);

module.exports = router;
