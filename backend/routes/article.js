import express from 'express';
import { articleController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

// Test filter
router.get('/filter/', articleController.listFilter);

// POST
router.post('/', articleController.create); // add isAuticated

// GET
router.get('/all/', articleController.list); // add isAuticated, isAuthorized('admin')
router.get('/published/', articleController.listPublished); // add isAuticated
router.get('/notPublished/', articleController.listNotPublished); // add isAuticated, isAuthorized('admin')
router.get('/public/', articleController.listPublic);
router.get('/:id', articleController.findById);

// PUT
router.put('/:id', articleController.update); // add isAuticated, isAuthorized('admin')

// DELETE
router.delete('/:id', articleController.remove); // add isAuticated, isAuthorized('admin')

export default router;
