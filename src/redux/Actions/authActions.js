import {SIGNUP, LOGIN} from './types';
import Swal from 'sweetalert2';
import axios from 'axios';

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

// const storeToken = (token) => {
//     cookies.set({name: "token", value: token, httpOnly: true, url: "/"});
// }

export const registerUser = (newUser) => dispatch => {
    axios
        .post("https://payment-automation.vercel.app/api/user/create", newUser)
        .then(res => {
            console.log(res.data);
            alert("Signup Successful", 'Redirecting...', "success");
            // storeToken(res.data.token);
        })
        .catch(err => {
            alert("Error!", err.message, "error")
            console.log(err.message)
        });
    dispatch({type: SIGNUP, payload: newUser});
}

export const loginUser = (oldUser) => dispatch => {
    axios
        .post("https://payment-automation-amj1c2cpl.vercel.app/api/user/authenticate", oldUser)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            alert("Error!", "Invalid Login Credentials", "error")
            console.log(err.message)
        });
    dispatch({type: LOGIN, payload: oldUser});
}