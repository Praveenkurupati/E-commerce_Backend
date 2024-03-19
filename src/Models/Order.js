const { DataTypes } = require("sequelize");
const sequelize = require("../DataBase/config");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(
      "Pending",
      "Confirmed",
      "Shipped",
      "Delivered",
      "Cancelled"
    ),
    allowNull: false,
    defaultValue: "Pending",
  },
  productIds: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
});

module.exports = Order;
