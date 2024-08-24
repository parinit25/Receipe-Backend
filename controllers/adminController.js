const User = require("../models/User");
const Recipe = require("../models/Recipe");

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.banUser = async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  await user.destroy();
  res.status(204).end();
};

exports.getRecipes = async (req, res) => {
  const recipes = await Recipe.findAll();
  res.json(recipes);
};

exports.deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.recipeId);
  await recipe.destroy();
  res.status(204).end();
};
