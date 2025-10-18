import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { CommentCreate } from "../controller/comment/CommentCreate.js";
import { CommentGet } from "../controller/comment/CommentGet.js";

const commentRouter = express.Router();

commentRouter.post("/Create/:postId", authMiddleware, CommentCreate);
commentRouter.get("/Get/:postId", authMiddleware, CommentGet);

export default commentRouter;
