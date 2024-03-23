import API from "../../config/baseUrl";
import { ActionTypes } from "../../constants/action_types";
import { ApiEndpoints } from "../../constants/api_endpoints";
import { Actiontype } from "./authActions";

const addProfile =
  (formData: {
    name: string;
    bio?: string;
    profilePic?: string;
    socialMedia?: {
      LinkedIn?: string;
      Facebook?: string;
      Instagram?: string;
      Github?: string;
    };
    skills?: string[];
  }): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_PROFILE_REQUEST,
    });

    try {
      const { data } = await API.post(ApiEndpoints.ADD_PROFILE, formData);
      console.log("data in addprofile", data.profile);
      dispatch({
        type: ActionTypes.ADD_PROFILE_SUCCESS,
        payload: data.profile,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.ADD_PROFILE_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

const getMyProfile = (): Actiontype => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.GET_PROFILE_REQUEST,
  });

  try {
    const { data } = await API.get(ApiEndpoints.GET_MY_PROFILE);
    console.log("data in getmy profile issssssssssssssssss ", data);
    dispatch({
      type: ActionTypes.GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ActionTypes.GET_PROFILE_FAILURE,
      payload: error.message || "Something went wrong",
    });
  }
};

export { addProfile, getMyProfile };
