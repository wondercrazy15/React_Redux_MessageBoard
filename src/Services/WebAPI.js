import axios from 'axios';
// Const 
import {GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE} from "./../Store/const/Const"
const baseURL = "https://raw.githubusercontent.com/typicode/jsonplaceholder/master/data.json";
export function getAllPostList() {
  return (dispatch) => {
    dispatch({
      type: GET_POST
    });
    axios.get(baseURL)
      .then(res => {
        dispatch({
          type: GET_POST_SUCCESS,
          payload: res
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POST_FAILURE,
          payload: error
        });
      })
  }
}
