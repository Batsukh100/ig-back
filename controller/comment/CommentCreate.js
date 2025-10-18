import { CommentModel } from "../../Schema/CommentSchema.js";

export const CommentCreate = async (req, res) => {
  const userId = req.user._id;
  const postId = req.params.postId;
  const { comment } = req.body;

  const createdComments = await CommentModel.create({
    postId,
    comment,
    userId,
  });

  res.status(200).json(createdComments);
};
