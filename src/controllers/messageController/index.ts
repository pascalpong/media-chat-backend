import { Request, Response } from 'express';

// Game model
var ChatRoom = require('../../config/models/chatRoomModel');

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { userId, message } = req.body;
        const createRoom = {
            userId,
            message,
            sentAt: new Date
        };
        const response = await ChatRoom(createRoom).update()
        return res.json(response);

    } catch (error) {
        
    }
}