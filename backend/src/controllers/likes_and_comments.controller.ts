import { Post } from "../models/post.model";

const addComment = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      res.status(404).json({ msg: `No post with id ${postId} found ` });
    }

    if (!req.user) {
      res.status(401).json({ msg: "Auth Invalid : Please login first" });
      return;
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
    if (!req.user) {
      return res
        .status(401)
        .json({ msg: "Unauthorized: Authentication required" });
    }

    const post = await Post.findByIdAndUpdate(
      postId,
      { $pull: { comments: { _id: commentId, user: req.user._id } } },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ msg: `No post with id ${postId} found` });
    }

    if (!post.comments.length) {
      return res.status(404).json({
        msg: `No comment with id ${commentId} found in the specified post`,
      });
    }

    res.status(200).json({ msg: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateComment = async (req, res) => {};

export { addComment, deleteComment, updateComment };
