import express from "express";
import userRouter from "./user";
import chatRoomRouter from "./chatRoom";

const router = express.Router();

router.use('/user', userRouter);
router.use('/chat-room', chatRoomRouter);

export default router;
