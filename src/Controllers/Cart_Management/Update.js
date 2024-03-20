const Cart = require("../../Models/Cart");

// Update item in the cart by ID
const updateItemInCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Cart.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedItem = await Cart.findByPk(id);
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ message: "Item not found in the cart" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
