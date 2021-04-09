import {url, headersConfig} from "./config";

export const loadSurveyFormsApi = () => {
    let headers: any = headersConfig();

    return fetch(url +'/api/v1/recruitment/forms/?node_type=Both', {
        method: 'GET',
        headers,
        mode: 'cors',
    });
};
export const submitSurveyFormsApi = (survey: any) => {
    let headers: any = headersConfig();

    return fetch(url +'/api/v1/recruitment/answers/submit/', {
        method: 'POST',
        headers,
        mode: 'cors',
        body: JSON.stringify(survey)
    });
};
