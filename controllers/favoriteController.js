const Favorite = require("../models/Favorite");

exports.addFavorite = async (req, res) => {
  const favorite = await Favorite.create({
    userId: req.user.id,
    recipeId: req.params.recipeId,
  });
  res.json(favorite);
};

exports.getFavorites = async (req, res) => {
  const favorites = await Favorite.findAll({ where: { userId: req.user.id } });
  res.json(favorites);
};

exports.removeFavorite = async (req, res) => {
  const favorite = await Favorite.findOne({
    where: { userId: req.user.id, recipeId: req.params.recipeId },
  });
  if (!favorite) return res.status(404).json({ message: "Favorite not found" });
  await favorite.destroy();
  res.status(204).end();
};
