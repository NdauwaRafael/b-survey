import {
    LOAD_SURVEY_SUCCESS,
    LOAD_SURVEY_FAILED
} from "../../constants/actionTypes";

let initialState = {
    forms: []
};

export default (state = initialState, action: any) => {
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

        default:
            return state;
    }
}
