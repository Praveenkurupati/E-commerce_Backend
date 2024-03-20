const Order = require("../../Models/Order");

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await Order.update(
      { status },
      {
        where: { id },
        returning: true,
      }
    );

    if (updatedOrder[0] === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order status updated", order: updatedOrder[1][0] });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
