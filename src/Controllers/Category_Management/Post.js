const { User } = require("../../Models/User");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, mobileNo, password } = req.body;
    const newUser = await User.create({ name, email, mobileNo, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
