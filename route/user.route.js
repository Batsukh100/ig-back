import express from "express";
import { Login } from "../controller/user/login.js";
import { UserCreate } from "../controller/user/userCreate.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { FollowMethod } from "../controller/user/FollowMethod.js";
import { GetUser } from "../controller/user/GetUser.js";
import { AllUserGet } from "../controller/user/AllUserGet.js";
import { Edit } from "../controller/user/EditProfile.js";
const userRouter = express.Router();

userRouter.post("/Login", Login);
userRouter.post("/Sign-up", UserCreate);
userRouter.post("/Follow-toggle/:FollowedUserId", authMiddleware, FollowMethod);
userRouter.get("/DiffUser/:userId", authMiddleware, GetUser);
userRouter.get("/", authMiddleware, AllUserGet);
userRouter.post("/EditProfile", authMiddleware, Edit);

export default userRouter;
