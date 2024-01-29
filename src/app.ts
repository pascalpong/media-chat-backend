import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { createServer } from "http";  // Changed from "node:http"
import router from "./routes/index";
import connectDB from "./config/database";  // Import the connectDB function
import { Server, Socket } from "socket.io";

dotenv.config();

const app = express();
const server = createServer(app);

// init middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Connect to the database
connectDB();

// router
app.use("", router);

//socket io
export const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:3000'
    ],
    methods: ['GET', 'POST'],
    credentials: true
  }
});
io.on("connection", (socket: Socket) => {
  socket.emit('message', 'A new client has connected');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});



export default server