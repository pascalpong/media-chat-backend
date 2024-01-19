import { Request, Response } from 'express';
import mongoose from 'mongoose';

// Game model
var Users = require('../../config/models/userModel');

export const users = async (req: Request, res: Response) => {
    return res.json('adsfasdf')
}

export const createUser = async (req: Request, res: Response) => {
    const newGame = {
        name:'test',
        token: '2334asfasd1234'
    };
    const response = await Users(newGame).save()

    return res.json(response);
}