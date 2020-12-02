import express from 'express';
import { articleController } from '../controllers/index.js';

const router = express.Router();

router.post('/', articleController.create);

router.get('/all/', articleController.list);
router.get('/public/', articleController.listPublic);
router.get('/:id', articleController.findById);

router.put('/:id', articleController.update);

router.delete('/:id', articleController.remove);

export default router;
