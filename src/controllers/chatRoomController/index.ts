import { Request, Response } from 'express';

// Game model
var ChatRoom = require('../../config/models/chatRoomModel');

export const chatRooms = async (req: Request, res: Response) => {

    const chatRooms = await ChatRoom.find();
    return res.json(chatRooms)
}

export const createChatRoom = async (req: Request, res: Response) => {
    try {
          
        const { roomName, members, socialMedia, createdBy } = req.body;
        const createRoom = {
            roomName,
            members,
            socialMedia,
            createdBy
        };
        const response = await ChatRoom(createRoom).save()
        return res.json(response);

    } catch (error) {
        
    }
}