import { IgUsersModel } from "../../Schema/UserSchema.js";

export const GetUser = async (req, res) => {
  const userId = req.params.userId;

  const user = await IgUsersModel.findById(userId);
  res.status(200).json({ message: user });
};
