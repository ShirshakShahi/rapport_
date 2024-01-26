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
      console.log("data in addprofile", data);
      dispatch({
        type: ActionTypes.ADD_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.ADD_PROFILE_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

export { addProfile };
