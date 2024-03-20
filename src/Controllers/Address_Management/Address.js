const Address = require("../../Models/Address");

// Controller to create a new address
exports.createAddress = async (req, res) => {
  try {
    const { address, addressType, userId } = req.body;
    const newAddress = await Address.create({ address, addressType, userId });
    res.status(201).json(newAddress);
  } catch (error) {
    console.error("Error creating address:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to get all addresses
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.status(200).json(addresses);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to get an address by ID
exports.getAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await Address.findByPk(id);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json(address);
  } catch (error) {
    console.error("Error fetching address:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to update an address
exports.updateAddress = async (req, res) => {
  const { id } = req.params;
  const { address, addressType, userId } = req.body;
  try {
    const updatedAddress = await Address.update(
      { address, addressType, userId },
      { where: { id } }
    );
    if (!updatedAddress) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json({ message: "Address updated successfully" });
  } catch (error) {
    console.error("Error updating address:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to delete an address
exports.deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAddress = await Address.destroy({ where: { id } });
    if (!deletedAddress) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    console.error("Error deleting address:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
