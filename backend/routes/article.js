import express from 'express';
import { articleController } from '../controllers/index.js';

const router = express.Router();

router.post('/', articleController.create);
export default router;