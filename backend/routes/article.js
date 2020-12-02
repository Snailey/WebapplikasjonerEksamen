import express from 'express';
import { articleController } from '../controllers/index.js';

const router = express.Router();

// POST
router.post('/', articleController.create);

// GET
router.get('/all/', articleController.list);
router.get('/public/', articleController.listPublic);
router.get('/:id', articleController.findById);

// PUT
router.put('/:id', articleController.update);

// DELETE
router.delete('/:id', articleController.remove);

export default router;
