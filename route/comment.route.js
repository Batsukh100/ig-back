import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { CommentCreate } from "../controller/comment/CommentCreate.js";
import { CommentGet } from "../controller/comment/CommentGet.js";
import { DeleteComment } from "../controller/comment/CommentDelete.js";
import { CommentEdit } from "../controller/comment/CommentEdit.js";

const commentRouter = express.Router();

commentRouter.post("/Create/:postId", authMiddleware, CommentCreate);
commentRouter.get("/Get/:postId", authMiddleware, CommentGet);
commentRouter.delete("/Delete/:commentId", authMiddleware, DeleteComment);
commentRouter.post("/Edit/:commentId", authMiddleware, CommentEdit);

export default commentRouter;
