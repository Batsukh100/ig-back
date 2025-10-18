import { IgUsersModel } from "../../Schema/UserSchema.js";

export const AllUserGet = async (_req, res) => {
  const AllUsers = await IgUsersModel.find();
  res.json(AllUsers);
};
