const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const User = require('../models/User');
const authenticate = require('../middleware/journalAuthentication');

// Route for Authentication

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/me', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;

// This code defines the authentication routes for user registration and login. 