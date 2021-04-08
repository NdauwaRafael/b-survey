import {url, headersConfig} from "./config";

export const loadUserApi = () => {
    return fetch(url +'/api/v1/users/current-user', {
        method: 'GET',
        ...headersConfig,
        mode: 'cors',
    });
};
