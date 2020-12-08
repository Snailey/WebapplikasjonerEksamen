import express from 'express';
import { logController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

// POST
router.post('/', logController.create);

// GET
router.get('/csv/', logController.listCSV); // add isAuticated, isAuthorized('super')
router.get('/list/', logController.list); // add isAuticated, isAuthorized('super')
router.get('/', logController.findByUrl); // add isAuticated, isAuthorized('super')
router.get('/:id', logController.findById); // add isAuticated, isAuthorized('super')

// PUT
router.put('/', logController.update);

export default router;
