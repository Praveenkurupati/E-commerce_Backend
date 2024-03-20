// Import necessary Sequelize modules
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a configuration file for Sequelize
const { User } = require("./User");

// Define the Address model
const Address = sequelize.define("Address", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Assuming you have a User model
      key: "id",
    },
  },
});

// Export the Address model
module.exports = Address;
