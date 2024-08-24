const Follow = require("../models/Follow");
const User = require("../models/User");

exports.followUser = async (req, res) => {
  const follow = await Follow.create({
    followerId: req.user.id,
    followingId: req.params.userId,
  });
  res.json(follow);
};

exports.getFollowing = async (req, res) => {
  const following = await Follow.findAll({
    where: { followerId: req.user.id },
    include: { model: User, as: "following" },
  });
  res.json(following);
};

exports.getFollowers = async (req, res) => {
  const followers = await Follow.findAll({
    where: { followingId: req.user.id },
    include: { model: User, as: "follower" },
  });
  res.json(followers);
};
