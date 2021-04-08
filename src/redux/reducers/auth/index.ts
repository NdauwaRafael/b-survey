import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
    access_token: localStorage.getItem('access_token'),
    token_expiry: 0,
    permissions: [],
    refresh_token: localStorage.getItem('refresh_token'),
    isAuthenticated: !!localStorage.getItem('access_token'),
    isLoading: false,
    user: null,
    authError: {},
    registrationErrors: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_FAILED:
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: null,
                user: null,
                authError: action.error
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('access_token', action.payload.access_token);
            localStorage.setItem('refresh_token', action.payload.refresh_token);
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                ...action.payload
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {...state, isLoading: false, isAuthenticated: false, token: null, user: null};

        default:
            return state;
    }
}
