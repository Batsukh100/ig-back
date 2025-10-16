import express from "express";
import { mongoose, connect } from "mongoose";
import cors from "cors";
import userRouter from "./route/user.route.js";
import postRouter from "./route/post.route.js";
import { IgUsersModel } from "./Schema/UserSchema.js";
import dotenv from "dotenv";
import commentRouter from "./route/comment.route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5555;

const MongoDBconnect = process.env.MongoDBconnect;

const connectToDB = async () => {
  await mongoose.connect(MongoDBconnect);
};

connectToDB();

app.use("/User", userRouter);
app.use("/Post", postRouter);
app.use("/Comment", commentRouter);
app.get("/", async (_req, res) => {
  const AllUsers = await IgUsersModel.find();
  res.json(AllUsers);
});

// app.get("/Post:userId");
// app.post("/Users");
// app.post("/Login");
// app.post("/Post");

app.listen(PORT, () => {
  console.log("your app is running http://localhost:" + PORT);
});
