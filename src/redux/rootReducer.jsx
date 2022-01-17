import { combineReducers } from "redux";
import userReducer from "./blog/blogReducer";

const rootReducer = combineReducers({
  user:userReducer,
});

export default rootReducer
