import axios from "axios";
import {
  FETCH_BLOG_SUCCESS,
} from "./blog_Action_Type";

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_BLOG_SUCCESS,
    payload: users,
  };
};

export const fetchUsers = ()=>{
    return async(dispatch) =>{
      try {
        const userData = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(userData)
        dispatch(fetchUserSuccess(userData.data))
      } catch (error) {
        const errMsg = error.message
          console.log(errMsg)
      }  
      
    }}