import {url, headersConfig} from "./config";

export const loadUserApi = () => {
    let headers: any = headersConfig();

    return fetch(url +'/api/v1/users/current-user', {
        method: 'GET',
        headers,
        mode: 'cors',
    });
};
