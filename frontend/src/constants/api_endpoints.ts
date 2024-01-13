export const ApiEndpoints = {
  // Authentication
  SIGNUP: "/api/v1/auth/signup",
  LOGIN: "/api/v1/auth/login",

  // Post-related endpoints
  GET_ALL_POSTS: "/api/v1/post",
  GET_SINGLE_POST: "/api/v1/post/:postId",
  ADD_POST: "/api/v1/post",
  UPDATE_POST: "/api/v1/post/:postId",
  DELETE_POST: "/api/v1/post/:postId",
  ADD_COMMENT: "/api/v1/post/:postId/comments",
  DELETE_COMMENT: "/api/v1/post/:postId/comments/:commentId",
  UPDATE_COMMENT: "/api/v1/post/:postId/comments/:commentId",

  // Profile-related endpoints
  GET_MY_PROFILE: "/api/v1/profile/me",
  ADD_PROFILE: "/api/v1/profile/me",
  UPDATE_BIO: "/api/v1/profile/me/bio",
  UPDATE_PROFILE: "/api/v1/profile/:profileId",
};
