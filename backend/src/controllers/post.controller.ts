import { Request, Response } from "express";
import { Post } from "../models/post.model";

const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({
      title,
      content,
      user: req.user,
    });

    await newPost.save();
    res.status(200).json({ newPost });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!!!" });
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      res.status(404).json({ msg: `No post with id ${postId} found!!!` });
      return;
    }

    if (!req.user._id.equals(post.user)) {
      res.status(401).json({ msg: "Invalid Credentials" });
      return;
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    const updatedPost = await post.save();

    res.status(200).json({ updatedPost });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res
        .status(404)
        .json({ msg: `No post with id ${postId} found!!!` });
      return;
    }

    if (!req.user._id.equals(post.user)) {
      res.status(401).json({ msg: "Invalid Credentials" });
      return;
    }

    const deletedPost = await post.deleteOne();

    res.status(200).json({ deletedPost });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      res.status(404).json({ msg: `No post with id ${postId} found` });
      return;
    }

    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!!!" });
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});

    if (posts.length === 0) {
      res.status(404).json({ msg: "No posts found" });
      return;
    }

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!!!" });
  }
};

export { addPost, updatePost, deletePost, getSinglePost, getAllPosts };