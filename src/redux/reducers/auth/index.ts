import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
} from '../../constants/actionTypes';

const isExpired = () => {
    let expiryTime = localStorage.getItem("token_expiry");
    if (!expiryTime) return ;
    return new Date(expiryTime) > new Date();
};

const initialState = {
    access_token: localStorage.getItem('access_token'),
    token_expiry: 0,
    permissions: [],
    refresh_token: "",
    isAuthenticated: isExpired(),
    isLoading: false,
    user: null,
    authError: {},
    registrationErrors: {}
};



export const auth = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_FAILED:
            localStorage.removeItem('access_token');
            // localStorage.removeItem('refresh_token');
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
            localStorage.setItem('token_expiry', new Date(Date.now() + parseInt(action.payload.expires_in) * 1000).toString() );
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                ...action.payload
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('access_token');
            localStorage.removeItem('token_expiry');
            return {...state, isLoading: false, isAuthenticated: false, access_token: null};

        default:
            return state;
    }
};
