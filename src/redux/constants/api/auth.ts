import axios, { AxiosRequestConfig } from 'axios';
import {url} from "./config";

export const loginUserApi = (user: string, config: AxiosRequestConfig | any) => {
    return fetch(url +'/api/v1/oauth/token/', {
        method: 'POST',
        body: user,
        ...config
    });
};

export const logoutUserApi = (config: AxiosRequestConfig | undefined) => {
    return axios.post(url +'api/auth/logout', null, config);
};
