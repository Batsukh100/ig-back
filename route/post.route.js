import express from "express";
import { PostCreate } from "../controller/post/PostCreate.js";
import { PostGet } from "../controller/post/PostGet.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { PostUser } from "../controller/post/PostUser.js";
import { LikeToggle } from "../controller/post/LikeToggle.js";
import { User } from "../controller/post/User.js";

const postRouter = express.Router();

postRouter.post("/Create", authMiddleware, PostCreate);
postRouter.get("/Profile", authMiddleware, PostUser);
postRouter.get("/user/:userId", authMiddleware, User);
postRouter.post("/like-toggle/:postId", authMiddleware, LikeToggle);
postRouter.get("/Get", PostGet);

export default postRouter;
