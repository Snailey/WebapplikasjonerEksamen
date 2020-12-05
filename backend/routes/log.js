import express from 'express';
import { logController } from '../controllers/index.js';

const router = express.Router();

// POST
router.post('/', logController.create);

// GET
router.get('/list/', logController.list);
router.get('/', logController.findByUrl);

// PUT
router.put('/', logController.update);

export default router;
