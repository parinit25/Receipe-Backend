const express = require("express");
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/users", authMiddleware, adminController.getUsers);
router.delete("/users/:userId", authMiddleware, adminController.banUser);
router.get("/recipes", authMiddleware, adminController.getRecipes);
router.delete(
  "/recipes/:recipeId",
  authMiddleware,
  adminController.deleteRecipe
);

module.exports = router;
