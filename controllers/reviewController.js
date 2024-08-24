const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  const review = await Review.create({
    ...req.body,
    userId: req.user.id,
    recipeId: req.params.recipeId,
  });
  res.json(review);
};

exports.getReviews = async (req, res) => {
  const reviews = await Review.findAll({
    where: { recipeId: req.params.recipeId },
  });
  res.json(reviews);
};
