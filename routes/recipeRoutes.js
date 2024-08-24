const express = require("express");
const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, recipeController.createRecipe);
router.get("/", recipeController.getRecipes);
router.get("/:id", recipeController.getRecipeById);
router.put("/:id", authMiddleware, recipeController.updateRecipe);
router.delete("/:id", authMiddleware, recipeController.deleteRecipe);

module.exports = router;
