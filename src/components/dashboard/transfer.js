import React, {useState} from 'react';
import InputGroup from '../reusables/inputGroup';
import {connect} from 'react-redux';
import {TransferFunds} from '../../redux/Actions/transferActions';

const Styles = () => {
    return (
        <style jsx='true'>
            {
                ` .transferHolder {
                    box-shadow: 0 0 11px #d3d3d3f2;
                    width: 60%;
                    min-height: 50vh;
                    margin-left: 250px;
                }
                @media (max-width: 776px) {

                    .transferHolder {
                        width: 90%;
                        min-height: 40vh;
                        margin-left: 0;
                    }

                }
                 `
            }</style>
    )
}

const Transfer = (props) => {

    const [formData,
        setFormData] = useState({amount: '', customerName: '', customerEmail: '', RedirectUrl: 'https://my-merchants-page.com/transaction/confirm'});

    const {amount, customerName, customerEmail} = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const {Transfer} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        Transfer(formData);
    }

    return (
        <div className="transferHolder center">
            <div className="formHolder">
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <InputGroup
                            formType='number'
                            onChange={handleChange}
                            formName='amount'
                            formValue={amount}
                            placeholder='Amount'/>
                    </div>
                    <div className="mt-3">
                        <InputGroup
                            formType='text'
                            onChange={handleChange}
                            formName='customerName'
                            formValue={customerName}
                            placeholder='Customer Name'/>
                    </div>
                    <div className="mt-3">
                        <InputGroup
                            formType='email'
                            onChange={handleChange}
                            formName='customerEmail'
                            formValue={customerEmail}
                            placeholder='Customer Email'/>
                    </div>
                    <div className="btnHolder mt-3">
                        <button type='submit' className="default_btn">Transfer {amount}</button>
                    </div>
                </form>
            </div>
            <Styles/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        Transfer: (transferDetails) => dispatch(TransferFunds(transferDetails))
    }
}

export default connect(null, mapDispatchToProps)(Transfer);