import { combineReducers } from "redux";
import authReducer from "./auth.js";
import currentUserReducer from "./currentUser.js";
import questionsReducer from './questions.js'
import userReducer from './users.js'


export default combineReducers({
    authReducer , currentUserReducer , questionsReducer, userReducer
})