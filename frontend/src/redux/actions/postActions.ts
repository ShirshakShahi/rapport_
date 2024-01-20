import API from "../../config/baseUrl";
import { ActionTypes } from "../../constants/action_types";
import { ApiEndpoints } from "../../constants/api_endpoints";
import { Actiontype } from "./authActions";

const getAllPosts = (): Actiontype => async (dispatch) => {
  dispatch({
    type: ActionTypes.GET_ALL_POST_REQUEST,
  });

  try {
    const { data } = await API.get(ApiEndpoints.GET_ALL_POSTS);
    console.log("data in get_all_posts", data);
    dispatch({
      type: ActionTypes.GET_ALL_POST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ActionTypes.GET_ALL_POST_FAILURE,
      payload: error.message || "Something went wrong",
    });
  }
};

const getSinglePost =
  (postId: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_SINGLE_POST_REQUEST,
    });

    try {
      const { data } = await API.get(
        ApiEndpoints.GET_SINGLE_POST.replace(":postId", postId)
      );
      console.log("data in get_post_by_id", data);
      dispatch({
        type: ActionTypes.GET_SINGLE_POST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET_SINGLE_POST_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

const addPost =
  (title: string, content: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_POST_REQUEST,
    });

    try {
      const { data } = await API.post(ApiEndpoints.ADD_POST, {
        title,
        content,
      });
      console.log("data in add_post", data);
      dispatch({
        type: ActionTypes.ADD_POST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.ADD_POST_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

const updatePost =
  (postId: string, title: string, content: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.UPDATE_POST_REQUEST,
    });

    try {
      const { data } = await API.patch(
        ApiEndpoints.UPDATE_POST.replace(":postId", postId),
        {
          title,
          content,
        }
      );
      console.log("data in update_post", data);
      dispatch({
        type: ActionTypes.UPDATE_POST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.UPDATE_POST_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

const deletePost =
  (postId: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.DELETE_POST_REQUEST,
    });

    try {
      const { data } = await API.delete(
        ApiEndpoints.DELETE_POST.replace(":postId", postId)
      );

      console.log("data in delete_post", data);
      dispatch({
        type: ActionTypes.DELETE_POST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.DELETE_POST_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

//comments

const addComment =
  (postId: string, text: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_COMMENT_REQUEST,
    });

    try {
      const { data } = await API.post(
        ApiEndpoints.ADD_COMMENT.replace(":postId", postId),
        { text }
      );

      console.log("data in add_comment", data);
      dispatch({
        type: ActionTypes.ADD_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.ADD_COMMENT_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

const updateComment =
  (postId: string, commentId: string, text: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.UPDATE_COMMENT_REQUEST,
    });

    try {
      const { data } = await API.post(
        ApiEndpoints.ADD_COMMENT.replace(":postId", postId).replace(
          ":commentId",
          commentId
        ),
        { text }
      );

      console.log("data in update_comments", data);
      dispatch({
        type: ActionTypes.UPDATE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.UPDATE_COMMENT_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

const deleteComment =
  (postId: string, commentId: string): Actiontype =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.DELETE_COMMENT_REQUEST,
    });

    try {
      const { data } = await API.delete(
        ApiEndpoints.ADD_COMMENT.replace(":postId", postId).replace(
          ":commentId",
          commentId
        )
      );

      console.log("data in delete_post", data);
      dispatch({
        type: ActionTypes.DELETE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.DELETE_COMMENT_FAILURE,
        payload: error.message || "Something went wrong",
      });
    }
  };

export {
  getAllPosts,
  getSinglePost,
  addPost,
  updatePost,
  deletePost,
  addComment,
  updateComment,
  deleteComment,
};
