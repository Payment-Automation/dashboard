import {SIGNUP} from '../Actions/types';

const initialState = {
    isRegistered: false
}

const authReducer =  (state = initialState , action) => {
    switch (action.type) {
        case SIGNUP: 
            return{
                ...state,
                isRegistered: true
            }
            break
        default:
            return{
                ...state
            }
    }
} 

export default authReducer;