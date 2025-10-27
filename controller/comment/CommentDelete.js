import { CommentModel } from "../../Schema/CommentSchema.js";

export const DeleteComment = async (req, res) => {
  const commentId = req.params.commentId;
  console.log(commentId);
  await CommentModel.findByIdAndDelete(commentId);

  res.status(200).json({ DeleteMessage: "amjilltai comment ustgalaa" });
};
