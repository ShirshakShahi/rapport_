import { ThunkAction } from "redux-thunk";
import API from "../../config/baseUrl";
import { ActionTypes } from "../../constants/action_types";
import { ApiEndpoints } from "../../constants/api_endpoints";
import { RootState } from "../store";

export interface Action {
  type: string;
  payload?: any;
  // add any other properties if needed
}

export type Actiontype = ThunkAction<void, RootState, unknown, Action>;
// type LoginAction = ThunkAction<void, RootState, unknown, Action>;

const signup =
  (username: string, email: string, password: string): Actiontype =>
  async (dispatch: any) => {
    dispatch({
      type: ActionTypes.SIGNUP_REQUEST,
    });

    try {
      const { data } = await API.post(ApiEndpoints.SIGNUP, {
        username,
        email,
        password,
      });

      dispatch({
        type: ActionTypes.SIGNUP_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SIGNUP_FAILURE,
        payload: error?.message,
      });
    }
  };

const login =
  (email: string, password: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.LOGIN_REQUEST,
    });

    try {
      const { data } = await API.post(ApiEndpoints.LOGIN, { email, password });
      console.log(data);
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: {
          token: data.token,
          user: data.user,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
        payload: error?.response.data.msg,
      });
    }
  };

export { signup, login };
