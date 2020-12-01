import express from 'express';
import { officeController } from '../controllers/index.js';

const router = express.Router();

router.post('/', officeController.create);
export default router;
