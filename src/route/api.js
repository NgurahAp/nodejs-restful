import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.get("/api/users/current", authMiddleware, userController.get);
userRouter.patch("/api/users/current", authMiddleware, userController.update);

export { userRouter };
