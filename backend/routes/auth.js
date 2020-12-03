// hentet fra forelesnings eksempelet
import express from 'express';
import { authController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

// POST
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// GET
router.get('/me', isAuthenticated, authController.currentUser);

export default router;
