import {
    LOAD_SURVEY_SUCCESS,
    LOAD_SURVEY_FAILED
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

        console.log(responseData);

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
}
