import { PostModel } from "../../Schema/PostSchema.js";

export const User = async (req, res) => {
  const userId = req.params.userId;

  const otherUserPost = await PostModel.find({ user: userId });

  res.status(200).json(otherUserPost);
};
