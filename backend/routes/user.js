import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

// POST
router.post('/', userController.create);

export default router;
