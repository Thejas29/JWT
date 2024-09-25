const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/controller');
const authenticateToken = require('../middlewares/middleware');

// Route for login
router.post('/login', login);

//Route for register
router.post('/register', register);

// Protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
