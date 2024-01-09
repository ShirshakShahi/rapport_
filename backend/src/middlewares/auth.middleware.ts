import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user.model";
dotenv.config();

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ msg: "Access denied. No token provided." });
    return;
  }

  const decoded = token.split(" ")[1];

  console.log(decoded);

  jwt.verify(
    decoded,
    process.env.JWT_SECRET_KEY,
    async (err: any, decoded: { userId: string }) => {
      if (err) {
        res.status(404).json({ msg: "Invalid token" });
        return;
      }

      try {
        const user = await User.findById(decoded.userId);

        if (!user) {
          res.status(404).json({ msg: "User not found." });
          return;
        }

        (req as any).user = user;
        next();
      } catch (error) {
        console.log("error in authhhh", error);
        res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  );
};
