const Order = require("../../Models/Order");

// Controller for getting an order by id
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params; // Extracting order id from request parameters

    // Finding the order by id in the database
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" }); // If order is not found
    }

    res.json({ order }); // Sending success response with order data
  } catch (err) {
    // Handling error
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
