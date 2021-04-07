
import axios, { AxiosRequestConfig } from 'axios';
import {url} from "./config";

export const loginUserApi = (user: any, config: AxiosRequestConfig | any) => {
    console.log(url);

    return axios.post(url +'/api/v1/oauth/token/', user, config)
};

export const logoutUserApi = (config: AxiosRequestConfig | undefined) => {
    return axios.post(url +'api/auth/logout', null, config);
};
