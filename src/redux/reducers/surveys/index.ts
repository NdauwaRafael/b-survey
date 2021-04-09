import {
    LOAD_SURVEY_SUCCESS,
    LOAD_SURVEY_FAILED,

    SURVEY_STARTED,
    SURVEY_STOPPED
} from "../../constants/actionTypes";

let initialState = {
    forms: [],
    startedSurveys: JSON.parse(<string>localStorage.getItem('started_surveys'))
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

        default:
            return state;
    }
};
