const express = require("express");
const favoriteController = require("../controllers/favoriteController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/:recipeId", authMiddleware, favoriteController.addFavorite);
router.get("/", authMiddleware, favoriteController.getFavorites);
router.delete("/:recipeId", authMiddleware, favoriteController.removeFavorite);

module.exports = router;
