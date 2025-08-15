const User = require('../models/users');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    // Server error
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { registerUser };
