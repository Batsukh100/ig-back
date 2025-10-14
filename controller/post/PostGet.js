import { PostModel } from "../../Schema/PostSchema.js";

export const PostGet = async (req, res) => {
  const AllPost = await PostModel.find().populate("user");

  res.status(200).json(AllPost);
};
