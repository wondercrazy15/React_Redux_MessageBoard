import {GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE} from "./../../const/Const"

export default (state = "", action) => {
    const payload = action.payload
  
    switch (action.type) {
      case GET_POST:
        return {
          ...state,
          loading: true,
          loaded: false
        }
  
      case GET_POST_SUCCESS:
        return {
          ...state,
          data: payload.data,
          loading: false,
          loaded: true,
          error: null
        }
      case GET_POST_FAILURE:
  
        return {
          ...state,
          loading: false,
          loaded: true,
          error: payload
        }
      default:
        return state
    }
  }