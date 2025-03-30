import { authorizeUser } from "@/controllers/loginController";
import express from "express";

const loginRouter = express.Router();

loginRouter.post("/login", authorizeUser);

export default loginRouter;
