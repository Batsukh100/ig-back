import { compare } from "bcrypt";
import { IgUsersModel } from "../../Schema/UserSchema.js";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  const body = req.body;
  const JWT_SECRET = process.env.JWT_SECRET;

  const { email, password } = body;
  const isUser = await IgUsersModel.findOne({ email });

  if (isUser) {
    const hashedPassword = isUser.password;

    const isValid = await compare(password, hashedPassword);
    console.log(isValid);

    if (isValid === true) {
      const accessToken = jwt.sign({ data: isUser }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json(accessToken);
    } else {
      res.status(404).json({ message: "wrong password" });
    }
  } else {
    res.status(404).json({ message: "need to register" });
  }
};
