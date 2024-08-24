const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Recipe = require("./Recipe");

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Review.belongsTo(User, { foreignKey: "userId" });
Review.belongsTo(Recipe, { foreignKey: "recipeId" });

module.exports = Review;
