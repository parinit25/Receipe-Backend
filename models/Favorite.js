const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Recipe = require("./Recipe");

const Favorite = sequelize.define("Favorite", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
});

Favorite.belongsTo(User, { foreignKey: "userId" });
Favorite.belongsTo(Recipe, { foreignKey: "recipeId" });

module.exports = Favorite;
