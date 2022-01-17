import { FETCH_BLOG_SUCCESS } from "./blog_Action_Type";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_SUCCESS:
      return {
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
