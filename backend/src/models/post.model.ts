import { Schema, Document, model } from "mongoose";

export interface ILike {
  user: Schema.Types.ObjectId;
}

export interface IComment {
  user: Schema.Types.ObjectId;
  text: string;
}

export interface IPost extends Document {
  user: Schema.Types.ObjectId;
  title: string;
  content: string;
  likes?: ILike[];
  comments: IComment[];
}

const likeSchema: Schema<ILike> = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const commentSchema: Schema<IComment> = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
});

const postSchema: Schema<IPost> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    likes: [likeSchema],
    comments: [commentSchema],
  },
  { timestamps: true }
);

export const Post = model<IPost>("Post", postSchema);
