import express from 'express';
import { chatRooms, createChatRoom } from '../controllers/chatRoomController';

const router = express.Router();

router.get('', chatRooms);
router.post('', createChatRoom);

export default router;
