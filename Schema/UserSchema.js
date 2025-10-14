import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  bio: { type: String, required: false },
  profilePicture: { type: String, required: false },
  followers: [{ type: Schema.Types.ObjectId, required: true }],
  following: [{ type: Schema.Types.ObjectId, required: true }],
  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

export const IgUsersModel = mongoose.model("IGUsers", UserSchema);
