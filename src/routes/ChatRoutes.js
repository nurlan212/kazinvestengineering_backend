import express from 'express';
import ChatController from '../controllers/ChatController.js';

const router = express.Router();

router.get('/', ChatController.getAnswer);


export default router;