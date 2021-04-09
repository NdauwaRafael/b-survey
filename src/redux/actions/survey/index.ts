import {
    LOAD_SURVEY_SUCCESS,
    LOAD_SURVEY_FAILED,
    SURVEY_STOPPED,
    SURVEY_STARTED, SURVEY_SUBMIT_SUCCESS, SURVEY_SUBMIT_FAILED
} from "../../constants/actionTypes";
import * as surveysApi from "../../constants/api/surveys";

//forms
const formsLoaded = (resp: any) =>{
    return {
        type: LOAD_SURVEY_SUCCESS,
        forms: resp.forms
    }
};

const formsLoadFailed = (error: any) =>{
    return {
        type: LOAD_SURVEY_FAILED,
        error
    }
};

export const loadSurveyForms = () => async (dispatch: any) => {
    try {
        let response = await surveysApi.loadSurveyFormsApi();
        let responseData = await response.json();

        if (response.status === 200) {
            dispatch(formsLoaded(responseData))
        }
        else {
            dispatch(formsLoadFailed("Could not load survey forms"))
        }
    }
    catch (e) {
        dispatch(formsLoadFailed("Could not load survey forms, an error occurred " + e.toString()))
    }
};

//starting and stopping survey
export const surveyStarted = (surveyId: number) => (dispatch: any) => {
    dispatch({
        type: SURVEY_STARTED,
        surveyId
    })
};

export const surveyStopped = (surveyId: number) => (dispatch: any) => {
    dispatch({
        type: SURVEY_STOPPED,
        surveyId
    })
};

//submitting survey

const surveySubmitSuccess = (payload: any, user_id: number, surveyId: number) =>{
    return {
        type: SURVEY_SUBMIT_SUCCESS,
        payload,
        user_id,
        surveyId
    }
};

const surveySubmitFailed = (error: any) =>{
    return {
        type: SURVEY_SUBMIT_FAILED,
        error
    }
};

export const submitSurveyAction = (survey: any, user_id: number, surveyId: number) => async (dispatch: any) => {
    try {
        const response = await surveysApi.submitSurveyFormsApi(survey);
        const responseData = await response.json();

        if (response.status === 200) {
            dispatch(surveySubmitSuccess(responseData, user_id, surveyId))
        }
        else  {
            dispatch(surveySubmitFailed("Failed to submit data"))
        }
    }
    catch (e) {
        dispatch(surveySubmitFailed("An error occurred trying to submit data"))

    }
};
