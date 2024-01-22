import { Request, Response } from 'express';

// Game model
var Users = require('../../config/models/userModel');

export const getUsers = async (req: Request, res: Response) => {

    const users = await Users.find();

    return res.json(users)
}

export const createUser = async (req: Request, res: Response) => {
    try {

        const { name, token, username, socialMedia } = req.body;
        const createUser = {
            username,
            name,
            socialMedia,
            token
        };
        const response = await Users(createUser).save()
        return res.json(response);

    } catch (error) {
        
    }
}