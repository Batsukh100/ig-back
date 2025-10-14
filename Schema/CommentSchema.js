import { mongoose, Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  userId: [{ type: Schema.Types.ObjectId, required: true, ref: "IGUsers" }],
  comment: { type: String, required: false },
  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

export const CommentModel = mongoose.model("Comment", CommentSchema);
