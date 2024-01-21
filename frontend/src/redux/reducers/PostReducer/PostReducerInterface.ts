export default interface PostReducerInterface {
  isLoading: boolean;
  post: IPost;
  posts: IPost[];
  error?: any;
}

interface IPost {
  _id: string;
  user: {
    _id?: string;
    username: string;
  };
  title: string;
  content: string;
  likes?: { user: string }[];
  comments?: {
    user: string;
    text?: string;
  }[];
}
