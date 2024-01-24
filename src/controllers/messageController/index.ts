import { Request, Response } from 'express';

// Game model
var ChatRoom = require('../../config/models/chatRoomModel');
var Message = require('../../config/models/messageModel')

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { roomId } = req.params;
        const { userId, message } = req.body;
        const createRoom = {
            userId,
            message,
            roomId,
            sentAt: new Date
        };
        const response = await Message(createRoom).save()
        return res.json(response);
    } catch (error) {
        console.log(error)
    }
}

export const chatRoomMessages = async (req: Request, res: Response) => {
    try {
        const { roomId } = req.params;
        const messages = await Message.find({roomId})
        return res.json(messages)
    } catch (error) {
        console.log(error)
    }
}