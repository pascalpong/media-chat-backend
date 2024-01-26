import express from "express";
import userRouter from "./user";
import chatRoomRouter from "./chatRoom";
import authentication from "./authentication"

const router = express.Router();

router.use('/auth', authentication);

router.use('/user', userRouter);
router.use('/chat-room', chatRoomRouter);

export default router;
