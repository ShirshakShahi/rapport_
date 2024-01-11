import express, { Router } from "express";
import {
  addPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
} from "../controllers/post.controller";
import { auth } from "../middlewares/auth.middleware";
import {
  addComment,
  deleteComment,
  updateComment,
} from "../controllers/likes_and_comments.controller";

const router: Router = express.Router();

router.route("/").get(getAllPosts).post(auth, addPost);
router
  .route("/:postId")
  .get(getSinglePost)
  .patch(auth, updatePost)
  .delete(auth, deletePost);

router.route("/:postId/comments").post(auth, addComment);

router
  .route("/:postId/comments/:commentId")
  .delete(auth, deleteComment)
  .patch(auth, updateComment);

export { router as postRoute };
