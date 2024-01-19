import express from "express";
import path from "path";
import { createUser, users } from "../controllers/userController";
// import { asyncHandler } from "../utils/helpers/asyncHandler.ts";
const router = express.Router();

router.get("/", users);
router.post("/user", createUser)

export default router;
