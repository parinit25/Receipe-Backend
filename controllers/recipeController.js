const Recipe = require("../models/Recipe");

exports.createRecipe = async (req, res) => {
  const recipe = await Recipe.create({ ...req.body, userId: req.user.id });
  res.json(recipe);
};

exports.getRecipes = async (req, res) => {
  const recipes = await Recipe.findAll();
  res.json(recipes);
};

exports.getRecipeById = async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  if (!recipe) return res.status(404).json({ message: "Recipe not found" });
  res.json(recipe);
};

exports.updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  if (!recipe || recipe.userId !== req.user.id)
    return res.status(403).json({ message: "Unauthorized" });
  await recipe.update(req.body);
  res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  if (!recipe || recipe.userId !== req.user.id)
    return res.status(403).json({ message: "Unauthorized" });
  await recipe.destroy();
  res.status(204).end();
};
