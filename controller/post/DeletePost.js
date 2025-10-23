import { PostModel } from "../../Schema/PostSchema.js";

export const DeletePost = async (req, res) => {
  const postId = req.params.postId;
  console.log(postId);

  await PostModel.findByIdAndDelete(postId);

  res.status(200).json({ DeleteMessage: "amjilttai post ustgalaa" });
};
