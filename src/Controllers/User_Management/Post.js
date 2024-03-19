const bcrypt = require("bcrypt");
const { User } = require("../../Models/User");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt round of 10

    // Create the new user with the hashed password
    const newUser = await User.create({
      name,
      email,
      mobileNo: mobile,
      password: hashedPassword, // Save the hashed password
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
