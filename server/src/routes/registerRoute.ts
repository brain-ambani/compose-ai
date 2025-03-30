import { registerUser } from "@/controllers/registerUserController";
import express from "express";
const RegisterRouter = express.Router();

RegisterRouter.post("/register", registerUser);

export default RegisterRouter;
