import postReducer from './Post/Post';
import loginReducer from "./LoginUser/Login"; 
import {combineReducers} from 'redux';

export default combineReducers({
    postReducer:postReducer,  
    loginReducer:loginReducer  
})