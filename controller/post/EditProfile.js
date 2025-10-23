import { PostModel } from "../../Schema/PostSchema.js";

export const EditProfile = async (req, res) => {
  const postId = req.params.postId;
  const body = req.body;

  const response = await PostModel.findByIdAndUpdate(postId, {
    caption: body.caption,
    imgUrl: body.imgUrl,
  });

  res.status(200).json("amjilttai edit post hiile");
};
