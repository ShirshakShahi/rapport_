import { Post } from "../models/post.model";

export const addPost = async (req, res) => {
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
    console.log("error ", error);
    res.json(500).json({ msg: "Internal Server Error!!!" });
  }
};
export const updatePost = async (req, res) => {};
export const deletePost = async (req, res) => {};
export const getSinglePost = async (req, res) => {};
export const getAllPosts = async (req, res) => {};
