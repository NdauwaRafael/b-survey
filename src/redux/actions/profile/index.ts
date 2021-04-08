import {
    LOAD_USER_FAILED,
    LOAD_USER_SUCCESS
} from "../../constants/actionTypes";
import * as profileApi from "../../constants/api/profile";

const userLoaded = (resp: any) => {
    return {
        type: LOAD_USER_SUCCESS,
        user: resp
    }
};

const loadUserFailed = (error: any) => ({
    type: LOAD_USER_FAILED,
    error
});

export const loadUserAction = () => async (dispatch: any) => {
    try {
        let response = await profileApi.loadUserApi()
        let responseData = await response.json();

        console.log(responseData, "responseData");

        if (response.status == 200) {
            return dispatch(userLoaded(responseData));
        } else {
            return dispatch(loadUserFailed("failed to load user"));
        }
    } catch (e) {
        console.log(e, "e");

        return dispatch(loadUserFailed("failed to load user"));
    }
};
