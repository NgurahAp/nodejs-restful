import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import contactController from "../controller/contact-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.get("/api/users/current", authMiddleware, userController.get);
userRouter.patch("/api/users/current", authMiddleware, userController.update);
userRouter.delete("/api/users/logout", authMiddleware, userController.logout);

userRouter.post("/api/contacts", authMiddleware, contactController.create);
userRouter.get(
  "/api/contacts/:contactId",
  authMiddleware,
  contactController.get
);

userRouter.put(
  "/api/contacts/:contactId",
  authMiddleware,
  contactController.update
);

userRouter.delete(
  "/api/contacts/:contactId",
  authMiddleware,
  contactController.remove
);

userRouter.get("/api/contacts", authMiddleware, contactController.search);
export { userRouter };
