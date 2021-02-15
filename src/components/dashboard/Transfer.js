import React, {useState} from 'react';
import {transferFunds} from '../../redux/Actions/dashboardActions';
import {connect} from 'react-redux';

const Style = () => {
    return (
        <style jsx="true">
            {
                ` .transfer {
                    min-height: 100vh;
                    background-color: #f5f5f5;
                }

                .transferForm {
                    width: 60%;
                    background-color: #ffff;
                    min-height: 50vh;
                    border-radius: 7px;
                    box-shadow: 2px 1px 8px 0 #d0d4d8;
                }

                .transferForm form {
                    width: 75%;
                }

                .formElement {
                    border-bottom: 1px solid lightgray;
                    width: 90%;
                    margin: 0 auto;
                }

                .formElement input {
                    border: none;
                    background: #fff;
                    transition: all 0.35s ease;
                    outline: none;
                    width: 90%;
                }

                .formElement i {
                    color: #95abdc;
                }
                .formElement:focus,
                .formElement:hover {
                    border-bottom: 1px solid var(--default_blue);
                }

                input::-webkit-inner-spin-button,
                input::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                input[type=number] {
                    -moz-appearance: textfield;
                }

                .btn_holder {
                    width: fit-content;
                    width: -moz-fit-content;
                    margin: 0 auto;
                }
                 `
            }</style>
    )
}

const Transfer = ({transferFunds}) => {

    const [formData,
        setFormData] = useState({amount: '', customerName: '', customerEmail: '', redirectUrl: 'https://my-merchants-page.com/transaction/confirm'});

    const {amount, customerName, customerEmail, redirectUrl} = formData;

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
            <div className="transfer center">
                <div className="transferForm center">
                    <form onSubmit={handleSubmit}>
                        <div className="formElement mt-3">
                            <input
                                type="number"
                                onChange={handleChange}
                                value={amount}
                                placeholder="Amount"
                                name="amount"
                                required/>
                        </div>
                        <div className="formElement mt-3">
                            <input
                                type="text"
                                onChange={handleChange}
                                value={customerName}
                                placeholder="Recipient's Name"
                                name="customerName"
                                required/>
                        </div>
                        <div className="formElement mt-3">
                            <input
                                type="email"
                                onChange={handleChange}
                                value={customerEmail}
                                name="customerEmail"
                                placeholder="Recipient's Email"
                                required/>
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