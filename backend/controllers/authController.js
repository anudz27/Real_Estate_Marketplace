import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, passwordHash: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error in registering user' });
    }
};

// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};

// Placeholder function for getting user profile
export const getUserProfile = (req, res) => {
    res.status(200).json({ message: 'User profile retrieved' });
};

// Placeholder function for updating user profile
export const updateUserProfile = (req, res) => {
    res.status(200).json({ message: 'User profile updated' });
};
