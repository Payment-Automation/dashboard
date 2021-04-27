import React, {useState} from 'react';
import {transferFunds} from '../../redux/Actions/dashboardActions';
import InputField from '../reusables/InputField';
import {connect} from 'react-redux';

const Style = () => {
    return (
        <style jsx="true">
            {
                ` .transfer {
                    min-height: 65vh;
                }

                .transferForm {
                    width: 60%;
                    min-height: 50vh;
                }

                .transferForm form {
                    width: 75%;
                    margin: 0 auto;
                }

                .btn_holder {
                    width: fit-content;
                    width: -moz-fit-content;
                    margin: 0 auto;
                }

                @media (max-width: 766px){

                    .transferForm{
                        width: 90%;
                    }

                      .transferForm form{
                        width: 90%;
                    }
                }
                 `
            }</style>
    )
}

const Transfer = ({transferFunds}) => {

    const [formData,
        setFormData] = useState({amount: '', customerName: '', customerEmail: ''});

    const {amount, customerName, customerEmail} = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        transferFunds(formData);
    }

    return (
        <div>
            <div className="mt-3 ml-3">
                    <h2 className="section__head">Transfer Funds</h2>
                    <p className='section__text'>Transfer Funds to another user by filling the form below.</p>
            </div>
            <div className="transfer center">
                <div className="transferForm justifyCenter">
                    <form onSubmit={handleSubmit}>
                        <div className="formElement mt-3">
                            <InputField
                                label='Enter Amount'
                                formType='number'
                                handleChange={handleChange}
                                formValue={amount}
                                formName='amount'
                                placeholder='Amount'/>
                        </div>

                        <div className="formElement mt-3">
                            <InputField
                                label="Enter Recipient's Name"
                                formType='text'
                                handleChange={handleChange}
                                formValue={customerName}
                                formName='customerName'
                                placeholder="Recipient's Name"/>
                        </div>

                          <div className="formElement mt-3">
                            <InputField
                                label="Enter Recipient's Email"
                                formType='email'
                                handleChange={handleChange}
                                formValue={customerEmail}
                                formName='customerEmail'
                                placeholder="Recipient's Email"/>
                        </div>

                        <div className="btn_holder mt-3">
                            <button type="submit" className="default_btn">Transfer {amount}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Style/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        transferFunds: (transferData) => dispatch(transferFunds(transferData))
    }
}

export default connect(null, mapDispatchToProps)(Transfer);