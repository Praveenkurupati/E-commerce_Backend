const Order = require("../../Models/Order");

// Controller for deleting an order by id
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params; // Extracting order id from request parameters

    // Deleting the order from the database
    const deletedCount = await Order.destroy({
      where: { id },
    });

    if (deletedCount === 0) {
      return res.status(404).json({ message: "Order not found" }); // If order is not found
    }

    res.json({ message: "Order deleted successfully" }); // Sending success response
  } catch (err) {
    // Handling error
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
