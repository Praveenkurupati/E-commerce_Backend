const Cart = require("../../Models/Cart");

// Get all items in the cart
const getAllItemsInCart = async (req, res) => {
  try {
    const items = await Cart.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item in the cart by ID
