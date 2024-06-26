import { ActionTypes } from "../../../constants/action_types";
import PostReducerInterface from "./PostReducerInterface";

const initialState: PostReducerInterface = {
  isLoading: false,
  post: {
    _id: "",
    user: {
      _id: "",
      username: "",
    },
    title: "",
    content: "",
    likes: [],
    comments: [],
  },
  posts: [],
};

const reducer = (state = initialState, action: any): PostReducerInterface => {
  switch (action.type) {
    case ActionTypes.GET_ALL_POST_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };

    case ActionTypes.GET_ALL_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload?.posts,
        error: null,
      };

    case ActionTypes.GET_ALL_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionTypes.GET_SINGLE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };

    case ActionTypes.GET_SINGLE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionTypes.CLEAR_POST:
      return {
        ...state,
        post: {
          _id: "",
          user: {
            _id: "",
            username: "",
          },
          title: "",
          content: "",
          likes: [],
          comments: [],
        },
      };

    case ActionTypes.ADD_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.ADD_POST_SUCCESS:
      console.log("action payloaaaaad : ", action.payload);
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload.newPost],
        error: null,
      };

    case ActionTypes.ADD_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.filter((post) => post._id !== action.payload),
        error: null,
      };

    case ActionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionTypes.UPDATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.UPDATE_POST_SUCCESS:
      const { _id, title, content } = action.payload;
      return {
        ...state,
        isLoading: false,
        posts: state.posts.map((post) =>
          post._id === _id ? { ...post, title, content } : post
        ),
        error: null,
      };

    case ActionTypes.UPDATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionTypes.ADD_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.ADD_COMMENT_SUCCESS:
      const newComment = action.payload;
      return {
        ...state,
        isLoading: false,
        post: {
          ...state?.post,
          comments: [...(state.post?.comments ?? []), newComment],
        },
        error: null,
      };

    case ActionTypes.ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // TODO : reducers for likes later

    default:
      return state;
  }
};

export default reducer;
