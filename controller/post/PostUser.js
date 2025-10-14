import { PostModel } from "../../Schema/PostSchema.js";

export const PostUser = async (req, res) => {
  const userId = req.user._id;
  const UserPost = await PostModel.find({ user: userId });

  res.status(200).json(UserPost);
};
