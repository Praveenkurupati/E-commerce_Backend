const { Op } = require("sequelize");
const Order = require("../../Models/Order");

// Controller for getting all orders
exports.getAllOrders = async (req, res) => {
  try {
    // Fetching all orders from the database
    const orders = await Order.findAll();

    res.json({ orders }); // Sending success response with orders data
  } catch (err) {
    // Handling error
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// Controller for getting the number of orders placed for the day
exports.getOrdersCountForDay = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );

    // Get the count of orders placed for the day
    const ordersCount = await Order.count({
      where: {
        createdAt: {
          [Op.gte]: startDate,
        },
      },
    });

    res.json({ ordersCount }); // Sending success response with orders count for the day
  } catch (err) {
    // Handling error
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// Controller for getting the revenue generated for the day
exports.getRevenueForDay = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );

    // Get the sum of order total for the day
    const revenue = await Order.sum("total", {
      where: {
        createdAt: {
          [Op.gte]: startDate,
        },
      },
    });

    res.json({ revenue }); // Sending success response with revenue generated for the day
  } catch (err) {
    // Handling error
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
