import express from 'express';
import { officeController } from '../controllers/index.js';

const router = express.Router();

// POST
router.post('/', officeController.create);

// GET
router.get('/', officeController.list);
router.get('/:id', officeController.findById);

export default router;
