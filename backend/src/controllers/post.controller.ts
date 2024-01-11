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

export const updatePost = async (req, res) => {
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
    console.log("errorrrrr", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const deletePost = async (req, res) => {};

export const getSinglePost = async (req, res) => {};

export const getAllPosts = async (req, res) => {};
