import express, { Request, Response } from "express";
import { authMiddleware } from "@/middleware/authMiddleware";

const protectedRouter = express.Router();

protectedRouter.get("/protected", authMiddleware, (req: any, res: Response) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default protectedRouter;
