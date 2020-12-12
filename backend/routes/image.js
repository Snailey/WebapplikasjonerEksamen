import express from 'express';
import { imageController } from '../controllers/index.js';
import { upload } from '../middleware/image.js';

const router = express.Router();

router.post('/upload', upload, imageController.create);
router.get('/download/:id', imageController.get);
router.get('/image/:id', imageController.getImageById);

export default router;
