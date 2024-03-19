const { DataTypes } = require("sequelize");
const sequelize = require("../DataBase/config");

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
module.exports = {
  Category,
};
