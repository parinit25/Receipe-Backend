const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Recipe = require("./Recipe");

const Collection = sequelize.define("Collection", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Collection.belongsTo(User, { foreignKey: "userId" });
Collection.belongsToMany(Recipe, { through: "CollectionRecipes" });

module.exports = Collection;
