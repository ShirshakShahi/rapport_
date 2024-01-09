import { Request, Response } from "express";
import { User } from "../models/user.model";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signupHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      res
        .status(409)
        .json({ msg: "User with this username or email already exists" });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ data: newUser });
  } catch (error) {
    console.log("error ", error._message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const loginHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(404).json({ msg: "User with this email doesn't exist" });
      return;
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ msg: "Wrong Password !!!" });
      return;
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log("error ", error._message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export { signupHandler, loginHandler };
