import { combineReducers } from 'redux';
import {auth} from './auth'
import {profile} from "./profile"
import {surveys} from "./surveys";

export default combineReducers({
    auth,
    profile,
    surveys
})
