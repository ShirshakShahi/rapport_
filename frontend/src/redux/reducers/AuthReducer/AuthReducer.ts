import { message } from "antd";
import { ActionTypes } from "../../../constants/action_types";
import {
  TOKEN_LOCAL_STORAGE,
  getLocalStorage,
  isAuth,
  removeFromLocalStorage,
  setLocalStorage,
} from "../../../helpers/frontend_helpers";
import AuthenticationReducerInterface from "./AuthReducerInterface";

const initialState: AuthenticationReducerInterface = {
  user: { _id: "" },
  isLoading: false,
  isLoginSuccessFul: isAuth("token") ? true : false,
  loginResponse: getLocalStorage("token") ?? {},
};

const reducer = (
  state = initialState,
  action: any
): AuthenticationReducerInterface => {
  switch (action.type) {
    case ActionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.SIGNUP_SUCCESS:
      return {
        isLoading: false,
        signupResponse: action.payload,
        isRegisterUserSuccessFul: true,
        error: null,
      };

    case ActionTypes.SIGNUP_FAILURE:
      return {
        isLoading: false,
        signupResponse: {},
        isRegisterUserSuccessFul: false,
        error: action.payload,
      };

    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginResponse: "",
        error: null,
      };

    case ActionTypes.LOGIN_SUCCESS:
      console.log(action.payload);
      setLocalStorage("token", action.payload.token);
      setLocalStorage("user", action.payload.user);
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        loginResponse: action.payload.token,
        isLoginSuccessFul: true,
        error: null,
      };

    case ActionTypes.LOGIN_FAILURE:
      message.error(action.payload.toString());

      return {
        ...state,
        isLoading: false,
        loginResponse: undefined,
        isLoginSuccessFul: false,
        error: action.payload,
      };

    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ActionTypes.LOGOUT_SUCCESS:
      removeFromLocalStorage(TOKEN_LOCAL_STORAGE);
      return {
        signupResponse: {},
        isLoading: false,
        loginResponse: action.payload,
        isLoginSuccessFul: false,
      };

    case ActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loginResponse: undefined,
        isLoginSuccessFul: false,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
