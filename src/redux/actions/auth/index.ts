import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from "../../constants/actionTypes";
import * as authApi from "../../constants/api/auth";
require('dotenv').config();

//LOGIN
export const loginSuccess = (resp: any) => {
    console.log(resp, "Yaaay");

    return {
        type: LOGIN_SUCCESS,
        payload: resp
    }
};

export const loginFailed = (resp: any) => {
    console.log(resp, "Neey");

    return {
        type: LOGIN_FAILED,
        error: resp
    }
};

export const loginUser = (username: string, password: string) => (dispatch: (arg0: { type: string; payload?: any; error?: any; }) => void) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: process.env.REACT_APP_CLIENT_ID,
            password: process.env.REACT_APP_CLIENT_SECRET
        }
    };


    // let body = `grant_type=password&username=${username}&password=${password}>`;
    const params = new URLSearchParams();
    params.append('grant_type',  'password');
    params.append('username',  username);
    params.append('password',  password);

    console.log("Called");

    authApi.loginUserApi(params, config)
        .then((resp: { data: any; }) => {
            dispatch(loginSuccess(resp.data))
        })
        .catch((error: { response: { data: any; }; }) => {
            if (error.response) {
                return dispatch(loginFailed(error.response.data))
            } else {
                return dispatch(loginFailed('Login Failed'))
            }
        })
};
