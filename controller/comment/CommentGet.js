import { CommentModel } from "../../Schema/CommentSchema.js";

export const CommentGet = async (req, res) => {
  const postId = req.params.postId;

  const postComments = await CommentModel.find({ postId })
    .populate({
      path: "postId",
      populate: { path: "user", select: "username profilePicture" },
    })
    .populate("userId", "username profilePicture");

  res.status(200).json(postComments);
};
