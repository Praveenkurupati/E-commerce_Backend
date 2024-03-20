const Cart = require("../../Models/Cart");

// Delete item in the cart by ID
const deleteItemInCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Cart.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Item not found in the cart" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
