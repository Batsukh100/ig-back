import { CommentModel } from "../../Schema/CommentSchema.js";
import { PostModel } from "../../Schema/PostSchema.js";

export const comment = async (req, res) => {
  const user = req.user;
  const { comment } = req.body;
  const { postId } = req.params;
  console.log(comment, "ats");
  const comments = await CommentModel.create({
    comment: comment,
    user: user._id,
  });

  const postcomment = await PostModel.findByIdAndUpdate(postId, {
    comment: comments,
  }).populate("comment");

  res.status(200).json({ message: "Comment added", postcomment });
};
