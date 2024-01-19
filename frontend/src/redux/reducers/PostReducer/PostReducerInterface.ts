export default interface PostReducerInterface {
  isLoading: boolean;
  post: IPost;
  posts: IPost[];
  error?: any;
}

interface IPost {
  _id: string;
  username: string;
  title: string;
  content: string;
  upvotes?: { user: string }[];
  replies?: {
    user: string;
    text?: string;
  }[];
}
