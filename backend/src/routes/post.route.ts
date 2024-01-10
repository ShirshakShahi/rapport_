import express, { Router } from "express";
import {
  addPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
} from "../controllers/post.controller";
import { auth } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.route("/").get(getAllPosts).post(auth, addPost);
router
  .route("/:postId")
  .get(getSinglePost)
  .patch(auth, updatePost)
  .delete(auth, deletePost);

export { router as postRoute };
