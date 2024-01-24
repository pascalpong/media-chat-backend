import express from 'express';
import { chatRooms, createChatRoom } from '../controllers/chatRoomController';
import { chatRoomMessages, createMessage } from '../controllers/messageController'

const router = express.Router();

router.get('', chatRooms);
router.get('/:roomId/message', chatRoomMessages);
router.post('', createChatRoom);
router.post('/:roomId/message', createMessage);

export default router;
