import { Request, Response } from "express";
import { User } from "../models/user.model";
import { hashPassword } from "../utils/bcrypt";

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
    console.error("Error during user registration:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export { signupHandler };
