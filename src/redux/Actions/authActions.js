import {SIGNUP} from './types';
import axios from 'axios';

export const signNewUser = (newUser) => dispatch => {
    axios
        .post("https://payment-automation-amj1c2cpl.vercel.app/api/user/create", newUser)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.message)
        })

        dispatch({type: SIGNUP, payload: newUser});
}