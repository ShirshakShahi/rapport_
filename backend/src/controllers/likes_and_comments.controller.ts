import { Post } from "../models/post.model";

const addComment = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      res.status(404).json({ msg: `No post with id ${postId} found ` });
    }

    const newComment = {
      text: req.body.text,
      user: req.user._id,
    };

    // post.comments.push(newComment);
    // await post.save();
    await post.updateOne({ $push: { comments: newComment } });

    const updatedPost = await Post.findOne({ _id: postId });

    return res.status(200).json({
      msg: "Comment added successfully",
      newComment: updatedPost.comments.find(
        (comment) => comment.text === newComment.text
      ),
    });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ msg: `No post with id ${postId} found!!!` });
    }

    if (post.comments.length === 0) {
      return res.status(404).json({
        msg: `No comment found the specified post`,
      });
    }

    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (commentIndex === -1) {
      return res.status(404).json({ msg: "No comment found" });
    }

    if (!req.user._id.equals(post.comments[commentIndex].user)) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    const deletedComment = post.comments[commentIndex];

    post.comments.splice(commentIndex, 1);

    const updatedPost = await post.save();

    res.status(200).json({ deletedComment, updatedPost });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: err.message });
  }
};

const updateComment = async (req, res) => {
  const { postId, commentId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ msg: `No post with id ${postId} found!!!` });
    }

    if (post.comments.length === 0) {
      return res.status(404).json({
        msg: `No comment found the specified post`,
      });
    }

    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (commentIndex === -1) {
      return res.status(404).json({ msg: "No comment found" });
    }

    if (!req.user._id.equals(post.comments[commentIndex].user)) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    post.comments[commentIndex].text =
      req.body.text || post.comments[commentIndex].text;

    const updatedPost = await post.save();

    res.status(200).json({ updatedPost });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: err.message });
  }
};

export { addComment, deleteComment, updateComment };
