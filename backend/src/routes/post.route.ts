import express, { Router } from "express";
import { addPost } from "../controllers/post.controller";
import { auth } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.route("/").post(auth, addPost);

export { router as postRoute };
