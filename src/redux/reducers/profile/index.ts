import {LOAD_USER_SUCCESS, LOAD_USER_FAILED} from "../../constants/actionTypes";

const initialState = {
    user: {}
};

export const profile = (state = initialState, action: any) => {
    switch (action.type) {
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: action.user
            };

        case LOAD_USER_FAILED:
            return {
                ...state,
                user: null
            };

        default:
            return state;
    }
};
