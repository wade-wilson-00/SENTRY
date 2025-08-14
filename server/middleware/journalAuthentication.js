const jwt  = require('jsonwebtoken');
const User = require('../models/User');

const authenticateJournal = async (req, res, next) => {
    console.log("🪪 Authorization Header:", req.headers.authorization);

    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        console.log("🔐 Token:", token);
        console.log("🔑 JWT Secret:", process.env.JWT_SECRET);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Decoded:", decoded);

        const user = await User.findById(decoded._id); // <-- fixed this
        if (!user) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.user = user;
        next();

    } catch (err) {
        console.error('❌ Authentication error:', err);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authenticateJournal;
