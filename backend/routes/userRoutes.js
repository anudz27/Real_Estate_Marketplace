import express from 'express';
import { registerUser,logoutUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/:id', authMiddleware, getUserProfile);
router.put('/:id', authMiddleware, updateUserProfile);

export default router;
