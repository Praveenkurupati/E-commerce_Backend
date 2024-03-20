const Order = require("../../Models/Order");

// Controller for creating a new order
exports.createOrder = async (req, res) => {
  try {
    const { totalAmount, productIds } = req.body; // Destructuring totalAmount and productIds from request body

    // Creating a new order in the database
    const createdOrder = await Order.create({
      totalAmount,
      productIds,
    });

    res.status(201).json({ message: "Order created", order: createdOrder }); // Sending success response
  } catch (err) {
    // Handling error
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
