import { Request, Response } from 'express';

import { io } from '../../app';
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
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10; // Set limit here or a default value
        const skip = (page - 1) * limit;
        const messages = await Message.find({roomId})
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 }); // Sort by createdAt in descending order
        return res.json(messages);
    } catch (error) {
        console.log(error);
    }  
};