import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

// Game model
var Users = require('../../config/models/userModel');

export const getUsers = async (req: Request, res: Response) => {

    const users = await Users.find();

    return res.json(users)
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, /*token,*/ username, socialMedia, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const createUser = {
            username,
            password: hashedPassword,
            name,
            socialMedia: socialMedia ?? ['instagram'],
            // token
        };
        const response = await Users(createUser).save();
        return res.json(response);

    } catch (error) {
        console.log(error)
    }
}