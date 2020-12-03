import express from 'express';
import { messageController } from '../controllers/index.js';

const router = express.Router();

// POST
router.post('/', messageController.create);

export default router;
