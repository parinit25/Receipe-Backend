const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Follow = sequelize.define("Follow", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
});

Follow.belongsTo(User, { as: "follower", foreignKey: "followerId" });
Follow.belongsTo(User, { as: "following", foreignKey: "followingId" });

module.exports = Follow;
