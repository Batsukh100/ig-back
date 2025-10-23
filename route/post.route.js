import express from "express";
import { PostCreate } from "../controller/post/PostCreate.js";
import { PostGet } from "../controller/post/PostGet.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { PostUser } from "../controller/post/PostUser.js";
import { LikeToggle } from "../controller/post/LikeToggle.js";
import { User } from "../controller/post/User.js";
import { DeletePost } from "../controller/post/DeletePost.js";
import { EditProfile } from "../controller/post/EditProfile.js";

const postRouter = express.Router();

postRouter.post("/Create", authMiddleware, PostCreate);
postRouter.get("/Profile", authMiddleware, PostUser);
postRouter.get("/user/:userId", authMiddleware, User);
postRouter.post("/like-toggle/:postId", authMiddleware, LikeToggle);
postRouter.post("/EditPost/:postId", authMiddleware, EditProfile);
postRouter.delete("/Delete/:postId", authMiddleware, DeletePost);
postRouter.get("/Get", PostGet);

export default postRouter;
