import { IgUsersModel } from "../../Schema/UserSchema.js";

export const Edit = async (req, res) => {
  const body = req.body;
  const userId = req.user._id;

  const data = await IgUsersModel.findByIdAndUpdate(userId, {
    username: body.username,
    bio: body.bio,
  });
  res.status(200).json(data);
};
