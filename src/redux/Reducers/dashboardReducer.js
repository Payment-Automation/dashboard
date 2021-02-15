import {TRANSFER_FUNDS} from '../Actions/types';

const initialState = {};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_FUNDS:
            return {
                ...state
            }
            break;
            
        default:
            return {
                ...state
            }
    }
}

export default dashboardReducer;