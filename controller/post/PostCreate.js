import { PostModel } from "../../Schema/PostSchema.js";

export const PostCreate = async (req, res) => {
  const body = req.body;
  const user = req.user;

  const createPost = await PostModel.create({
    caption: body.caption,
    images: body.images,
    user: user._id,
  });
  res.json(createPost);
  console.log(createPost);
};
