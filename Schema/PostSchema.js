import { mongoose, Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "IGUsers", required: true },
  caption: { type: String, required: true },
  like: [{ type: Schema.Types.ObjectId, required: true }],
  images: {
    type: [{ type: String, required: true }],
    required: true,
  },
  comment: { type: Schema.Types.ObjectId, ref: "Comment", required: false },
  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

export const PostModel = mongoose.model("Post", PostSchema);
