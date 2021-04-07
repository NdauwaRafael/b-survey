import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from "../../constants/actionTypes";
import * as authApi from "../../constants/api/auth";

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

export const loginUser = (username: string, password: string) => (dispatch: (arg0: any[]) => void) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        auth: {
            username: process.env.CLIENT_ID,
            password: process.env.CLIENT_SECRET
        }
    };

    let body = JSON.stringify({username, password});

    authApi.loginUserApi(body, config)
        .then((resp: { data: any; }) => {
            dispatch([
                loginSuccess(resp.data)
            ])
        })
        .catch((error: { response: { data: any; }; }) => {
            if (error.response) {
                return dispatch([
                    loginFailed(error.response.data),
                ])
            } else {
                return dispatch([
                    loginFailed('Login Failed')
                ])
            }
        })
};
