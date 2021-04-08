import axios, { AxiosRequestConfig } from 'axios';
import {headersConfig, url} from "./config";

export const loginUserApi = (user: string) => {
    let headers: any = headersConfig();

    return fetch(url +'/api/v1/oauth/token/', {
        method: 'POST',
        body: user,
        headers,
        mode: 'cors'
    });
};

export const logoutUserApi = (config: AxiosRequestConfig | undefined) => {
    return axios.post(url +'api/auth/logout', null, config);
};
