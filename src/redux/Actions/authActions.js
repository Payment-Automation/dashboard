import {SIGNUP, LOGIN} from './types';
import Swal from 'sweetalert2';
import axios from 'axios';
import cookie from 'react-cookies'

const alert = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000
    });
}

const storeToken = (token) => {
   cookie.save('token', token, { httpOnly: true,  path: '/'})
}

export const registerUser = (newUser) => dispatch => {
    axios
        .post(process.env.REACT_APP_REGISTER_API, newUser)
        .then(res => {
            alert("Signup Successful", 'Redirecting...', "success");
            storeToken(res.data.token);
            dispatch({type: SIGNUP, payload: newUser});
        })
        .catch(err => {
            alert("Error!", "Invalid Signup Details", "error");
        });
}

export const loginUser = (oldUser) => dispatch => {
    axios
        .post(process.env.REACT_APP_LOGIN_API, oldUser)
        .then(res => {
            alert("Login Successful", "Redirecting", "success");
            storeToken(res.data.token);
            dispatch({type: LOGIN, payload: oldUser});
        })
        .catch(err => {
            alert("Error!", "Invalid Login Credentials", "error")
        });
}