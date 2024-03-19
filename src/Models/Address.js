const { DataTypes } = require("sequelize");
const sequelize = require("../DataBase/config");
const { User } = require("./User");

const Address = sequelize.define("address", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressDetails: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNo: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  addressType: {
    type: DataTypes.ENUM("Home", "Work", "Other"),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Address.belongsTo(User);

module.exports = {
  Address,
};
