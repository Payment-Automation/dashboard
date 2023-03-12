import React from 'react';

const Styles = () => {
    return (
        <style jsx='true'>
            {
                ` input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                input[type=number] {
                    -moz-appearance: textfield;
                }
                 `
            }</style>
    )
}

const InputGroup = ({formType, formValue, placeholder, formName, onChange}) => {
    return (
        <div>
            <div className="formElement">
                <input
                    type={formType}
                    value={formValue}
                    name={formName}
                    onChange={onChange}
                    placeholder={placeholder}
                    className='w-100'
                    required/>
            </div>
            <Styles/>
        </div>
    )
}

export default InputGroup;