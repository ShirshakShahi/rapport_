import { combineReducers } from "redux";
import authReducer from "./AuthReducer/AuthReducer";
import postReducer from "./PostReducer/PostReducer";
import profileReducer from "./ProfileReducer/ProfileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  profile: profileReducer,
});

export default rootReducer;
