import { hash } from "bcrypt";
import { IgUsersModel } from "../../Schema/UserSchema.js";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;


export const UserCreate = async (req, res) => {
  const body = req.body;
  const user = await IgUsersModel.findOne({
    email: body.email,
  });
  if (user) {
    res.status(400).json({ message: "User already exist" });
  } else {
    const saltRound = 10;
    const { password } = body;
    const hashedPassword = await hash(password, saltRound);
    const createUser = await IgUsersModel.create({
      email: body.email,
      password: hashedPassword,
      username: body.username,
      bio: body.bio,
      profilePicture: body.profilePicture,
      followers: body.followers,
      follewing: body.follewing,
    });

    const accessToken = jwt.sign({ data: createUser }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json(accessToken);
  }
};
