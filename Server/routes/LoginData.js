const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const ADMIN_EMAIL = 'admin@devhawks.com';
const ADMIN_PASSWORD = 'Hello@12';
const JWT_SECRET = 'secret';

// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the email matches the hardcoded admin email
    if (email !== ADMIN_EMAIL) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check if the password matches the hardcoded admin password
    if (password !== ADMIN_PASSWORD) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT
    const payload = { user: { id: email } };

    jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
            if (err) throw err;
            res.json({ token });
        }
    );
});

// Protected Route Example
router.get('/dashboard', (req, res) => {
    // Get token from the header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;
        res.json({ msg: 'Welcome to the admin dashboard!' });
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
});

module.exports = router;
