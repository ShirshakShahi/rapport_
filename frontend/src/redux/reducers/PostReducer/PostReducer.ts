import { ActionTypes } from "../../../constants/action_types";
import PostReducerInterface from "./PostReducerInterface";

const initialState: PostReducerInterface = {
  isLoading: false,
  post: {
    _id: "",
    username: "",
    title: "",
    content: "",
    upvotes: [],
    replies: [],
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
        posts: action.payload,
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

    case ActionTypes.ADD_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload],
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

    //todo update post and for other bio,comments and likes

    default:
      return state;
  }
};

export default reducer;
