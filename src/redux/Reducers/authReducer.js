import {SIGNUP, LOGIN} from '../Actions/types';

const initialState = {
    isRegistered: false,
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                isRegistered: true
            }
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
            
        default:
            return {
                ...state
            }
    }
}

export default authReducer;