import {
    LOAD_SURVEY_SUCCESS,
    LOAD_SURVEY_FAILED,

    SURVEY_STARTED,
    SURVEY_STOPPED,

    SURVEY_SUBMIT_SUCCESS,
    SURVEY_SUBMIT_FAILED
} from "../../constants/actionTypes";

let initialState = {
    forms: [],
    startedSurveys: localStorage.getItem('started_surveys') ? JSON.parse(<string>localStorage.getItem('started_surveys')) : [],
    submittedSurveys: localStorage.getItem('submitted_surveys') ? JSON.parse(<string>localStorage.getItem('submitted_surveys')) : []
};

export const surveys = (state = initialState, action: any) => {
    switch (action.type) {
        case LOAD_SURVEY_SUCCESS:
            return {
                ...state,
                forms: action.forms
            };
        case LOAD_SURVEY_FAILED:
            return {
                ...state
            };
        case SURVEY_STARTED:
            let survey_string = localStorage.getItem('started_surveys');
            let survey_data = [];
            if(survey_string) {
                survey_data = JSON.parse(survey_string);
                survey_data = survey_data.filter((survey: any) => survey.surveyId !== action.surveyId);
            }

            let updatedSurvey = [...survey_data, {
                surveyId: action.surveyId,
                started: true,
                startTime: Date.now()
            }];

            localStorage.removeItem('started_surveys');
            localStorage.setItem("started_surveys", JSON.stringify(updatedSurvey));

            return {
                ...state,
                startedSurveys: [...updatedSurvey]
            };
        case SURVEY_STOPPED:
            let survey = state.startedSurveys.filter((survey: any)=> survey.surveyId === action.surveyId);
            let current;
            if (survey.length > 0) {
                survey = survey[0]
            }
            else {
                return;
            }

            return {
                ...state,
                startedSurveys: [
                    ...state.startedSurveys.filter((surv: any) => surv.surveyId !== action.surveyId),
                    Object.assign({}, current)
                ]
            };
        case SURVEY_SUBMIT_SUCCESS:
            let submitted_survey_string = localStorage.getItem('started_surveys');
            let submitted_data: any[] = [];
            if(submitted_survey_string) {
                survey_data = JSON.parse(submitted_survey_string);
                survey_data = submitted_data.filter((survey: any) => survey.surveyId !== action.surveyId);
            }

            let submittedSurvey = [...submitted_data, {
                surveyId: action.surveyId,
                date: Date.now()
            }];

            localStorage.removeItem('submitted_surveys');
            localStorage.setItem("submitted_surveys", JSON.stringify(submittedSurvey));

            return {
                ...state,
                submittedSurveys: [...submittedSurvey]
            };
        default:
            return state;
    }
};
