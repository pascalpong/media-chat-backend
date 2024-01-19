import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { createServer } from "http";  // Changed from "node:http"
import router from "./routes/index";
import connectDB from "./config/database";  // Import the connectDB function

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

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
}); 

export default app