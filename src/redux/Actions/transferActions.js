import {TRANSFER_FUNDS} from './types/index';
import axios from 'axios';
import Swal from 'sweetalert2';
import {alert} from '../../components/reusables/alert';

export const TransferFunds = (transferDetails) => dispatch => {
    axios.post(process.env.REACT_APP_TRANSFER_API, transferDetails)
    .then(res => {
        alert("Transfer Successful", "Redirecting", "success");
        dispatch({type: TRANSFER_FUNDS, payload: transferDetails})
    })
    .catch(err => {
        alert('Transfer Unsuccessful', err.message, 'error')
    })
}