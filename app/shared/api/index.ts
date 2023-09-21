import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import passport from "passport";

import { User } from "./models/user";

import type { ConnectOptions } from "mongoose";

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose
  .connect(
    "mongodb+srv://krossyouyub:buo5O7qdGY7hRjRG@messanger-cluster.iqbd4ps.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
  )
  .then(() => console.log("Connected successfully!"))
  .catch((error) => console.log(error));

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on", port);
});

const createToken = (userId: mongoose.Types.ObjectId) => {
  const payload = {
    userId,
  };

  const token = jwt.sign(payload, "PBjBpY2xpXx8bx", { expiresIn: "1h" });

  return token;
};

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({ email, password });

  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User registered successfully✅" });
    })
    .catch((error) => {
      console.log("Error⛔️", error);
      res.status(500).json("Error regestring user");
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Email and the password are required!" });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.password !== password) {
        return res.status(404).json({ message: "Invalid password" });
      }

      const token = createToken(user._id);
      res.status(200).json({ token });
    })
    .catch((error) => {
      console.log("error in finding the user", error);
      res.status(404).json({ message: "Internal server error" });
    });
});
