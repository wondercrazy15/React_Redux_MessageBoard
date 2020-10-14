import {GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE, LOGIN_USER} from "./../../const/Const"

export default (state = "", action) => {
    const payload = action.payload
  
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          data: payload,
        }
    
      default:
        return state
    }
  }