import express from 'express';
import { categoryController } from '../controllers/index.js';

const router = express.Router();

// POST
router.post('/', categoryController.create);

// GET
router.get('/', categoryController.list);

export default router;
