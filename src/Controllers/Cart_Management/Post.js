const Cart = require("../../Models/Cart");

// Create a new item in the cart
const addItemToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const newItem = await Cart.create({ userId, productId });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addItemToCart,
};
