import express from 'express';
import { articleController } from '../controllers/index.js';
import { isAtenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

// POST
router.post('/', articleController.create); // add isAuticated

// GET
router.get('/all/', articleController.list); // add isAuticated
router.get('/public/', articleController.listPublic);
router.get('/:id', articleController.findById);

// PUT
router.put('/:id', articleController.update); // add isAuticated, isAuthorized('admin')

// DELETE
router.delete('/:id', articleController.remove); // add isAuticated, isAuthorized('admin')

export default router;
