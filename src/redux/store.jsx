import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./blog/blogReducer";
import logger from "redux-logger"


const middleware = [logger,thunk]

const store = createStore(
  blogReducer,applyMiddleware(...middleware)
);

export default store;
