import {
    LOGIN_USER,
    GET_POST_SUCCESS
} from "./../const/Const"

export function loginUserData(loginUser) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER,
            payload: loginUser
        })
    }
}
export function onPostEditDelete(res) {
    return (dispatch) => {
        dispatch({
            type: GET_POST_SUCCESS,
            payload: res
        });
    }
}