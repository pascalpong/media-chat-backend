import express from 'express';
import { login } from '../controllers/authenticationController';

const router = express.Router();

router.post('/login', login);

export default router;
