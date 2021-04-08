import {url, headersConfig} from "./config";

export const loadSurveyFormsApi = () => {
    let headers: any = headersConfig();

    return fetch(url +'/api/v1/recruitment/forms/?node_type=Both', {
        method: 'GET',
        headers,
        mode: 'cors',
    });
};
