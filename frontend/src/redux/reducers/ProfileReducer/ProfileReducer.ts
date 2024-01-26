import { ActionTypes } from "../../../constants/action_types";
import { ProfileReducerInterface } from "./ProfileReducerInterface";

const initialState: ProfileReducerInterface = {
  isLoading: false,
  userProfile: {
    user: "",
    name: "",
    bio: "",
    profilePic: "",
    skills: [],
  },
};
const reducer = (
  state = initialState,
  action: any
): ProfileReducerInterface => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_PROFILE_SUCCESS:
      return {
        isLoading: false,
        userProfile: action.payload,
      };

    case ActionTypes.GET_PROFILE_FAILURE:
      return {
        isLoading: false,
        userProfile: {
          user: "",
          name: "",
          bio: "",
          profilePic: "",
          skills: [],
        },
        error: action.payload,
      };

    case ActionTypes.ADD_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.ADD_PROFILE_SUCCESS:
      return {
        isLoading: false,
        userProfile: action.payload,
        error: null,
      };

    case ActionTypes.ADD_PROFILE_FAILURE:
      return {
        isLoading: false,
        userProfile: undefined,
        error: action.payload,
      };

    case ActionTypes.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        isLoading: false,
        userProfile: action.payload,
        error: null,
      };

    case ActionTypes.UPDATE_PROFILE_FAILURE:
      return {
        isLoading: false,
        userProfile: undefined,
        error: action.payload,
      };

    case ActionTypes.UPDATE_BIO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.UPDATE_BIO_SUCCESS:
      return {
        isLoading: false,
        userProfile: undefined,
        error: action.payload,
      };

    case ActionTypes.UPDATE_BIO_FAILURE:
      return {
        isLoading: false,
        userProfile: undefined,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
