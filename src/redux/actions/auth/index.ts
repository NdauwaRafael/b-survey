import {
    LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS,
} from "../../constants/actionTypes";
import * as authApi from "../../constants/api/auth";
require('dotenv').config();

interface LoginUserInterface {
    username: string,
    password: string
}

//LOGIN
export const loginSuccess = (resp: any) => {
    return {
        type: LOGIN_SUCCESS,
        payload: resp
    }
};

export const loginFailed = (resp: any) => {
    return {
        type: LOGIN_FAILED,
        error: resp
    }
};

export const loginUser = ({username, password}: LoginUserInterface) => async (dispatch: any) => {
    let body = `grant_type=password&username=${username}&password=${password}&client_id=${process.env.REACT_APP_CLIENT_ID}`;

    try {
        let response = await authApi.loginUserApi(body);
        let responseData: any = await response.json();

        if (response.status === 200){
            dispatch(loginSuccess(responseData));
        }
        else {
            return dispatch(loginFailed('Login Failed'));
        }
    }
    catch (e) {
        return dispatch(loginFailed('Login Failed ' + e.toString()));
    }
};

//Logout user
export const logoutUserAction = () => (dispatch: any) => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
};
