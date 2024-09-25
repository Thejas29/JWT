
const jwt = require('jsonwebtoken');

// Secret key for signing tokens
const SECRET_KEY = 'you';

// Mock user array for demonstration
let users = [{ id: 1, username: 'user1', password: 'password' }];

// Authenticate user and generate token
const login = (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
};

// Register a new user
const register = (req, res) => {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully', user: { username } });
};

module.exports = { login, register };
