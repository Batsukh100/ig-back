import { CommentModel } from "../../Schema/CommentSchema.js";

export const CommentEdit = async (req, res) => {
  const commentId = req.params.commentId;
  const body = req.body;

  const com = await CommentModel.findByIdAndUpdate(commentId, {
    comment: body.comment,
  });
  res.status(200).json("amjilttai edit post hiile", com);
};
