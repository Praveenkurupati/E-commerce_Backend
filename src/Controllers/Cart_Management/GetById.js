const Cart = require("../../Models/Cart");

const getItemInCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Cart.findByPk(id);
    if (!item) {
      res.status(404).json({ message: "Item not found in the cart" });
    } else {
      res.status(200).json(item);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
