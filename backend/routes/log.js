import express from 'express';
import { logController } from '../controllers/index.js';

const router = express.Router();

// POST
router.post('/', logController.create);

// GET
router.get('/', logController.list);
router.get('/:url', logController.findByUrl);

// PUT
router.put('/:id', logController.update);

export default router;
