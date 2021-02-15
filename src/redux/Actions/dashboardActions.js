import {TRANSFER_FUNDS} from './types';
import axios from 'axios';
import Swal from 'sweetalert2';

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

export const transferFunds = (transferData) => dispatch => {
    axios.post(process.env.REACT_APP_TRANSFER_API, transferData)
    .then(res => {
        dispatch({type: TRANSFER_FUNDS, payload: transferData});
        alert("Transfer Successful");
    })
    .catch(err => {
        alert("Error", err.message, 'error');
    });
}