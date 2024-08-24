const User = require("../models/User");
const Recipe = require("../models/Recipe");
const Favorite = require("../models/Favorite");

exports.getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    include: [
      { model: Recipe, as: "recipes" },
      { model: Favorite, as: "favorites" },
    ],
  });
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  await user.update(req.body);
  res.json(user);
};
