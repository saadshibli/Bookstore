const userService = require('../services/userService');

const handleCreateTestUser = async (req, res) => {
  try {
    const newUser = await userService.createTestUser();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  handleCreateTestUser,
};