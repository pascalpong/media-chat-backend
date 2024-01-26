import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

var Users = require('../../config/models/userModel');

export const login = async (req: Request, res: Response) => {

    const { username, password } = req.body;
    const user = await Users.findOne({
        username
    });
    const check = await bcrypt.compare(password, user.password);
    if(check) {
        return res.status(200).json(user)
    } else {
        return res.json('error')
    }
}
