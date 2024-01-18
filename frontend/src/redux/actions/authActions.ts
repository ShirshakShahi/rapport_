import { ThunkAction } from "redux-thunk";
import { API } from "../../config/baseUrl";
import { ActionTypes } from "../../constants/action_types";
import { ApiEndpoints } from "../../constants/api_endpoints";
import { RootState } from "../store";

interface AuthAction {
  type: string;
  payload?: any;
  // add any other properties if needed
}

type SignupAction = ThunkAction<void, RootState, unknown, AuthAction>;
type LoginAction = ThunkAction<void, RootState, unknown, AuthAction>;

const signup =
  (username: string, email: string, password: string): SignupAction =>
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
        type: ActionTypes.LOGIN_SUCCESS,
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
  (email: string, password: string): LoginAction =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.LOGIN_REQUEST,
    });

    try {
      const { data } = await API.post(ApiEndpoints.LOGIN, { email, password });
      console.log(data.token);
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: {
          token: data.token,
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
