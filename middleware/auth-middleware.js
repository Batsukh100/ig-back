import jwt from "jsonwebtoken";

export const authMiddleware = (req, _res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error("need authHeader");

  const accessToken = authHeader.split(" ")[1];
  if (!accessToken) throw new Error("need authToken");

  const user = jwt.verify(accessToken, JWT_SECRET);
  if (!user) throw new Error("need to sign in");

  req.user = user.data;

  next();
};
