import React from 'react';
import styles from '../../styles/InputField.module.css';

const InputField = (props) => {
    return (
        <div>
            <label className='mb-2'>{props.label}</label>
            <div className={styles.inputField}>
                {props.textArea
                    ? <textarea
                            rows='7'
                            placeholder={props.placeholder}
                            onChange={props.handleChange}
                            required={props.required}
                            name={props.formName}
                            value={props.formValue}>
                            {props.icon && <div className="">
                                <span className={`textIsWhite \n ${props.iconClass}`} onClick={props.onClick}></span>
                            </div>}
                        </textarea>
                    : <input
                        type={props.formType}
                        placeholder={props.placeholder}
                        onChange={props.handleChange}
                        required={!props.optional}
                        name={props.formName}
                        value={props.formValue}/>}
                {props.icon && <div className="">
                    <span className={`textIsWhite \n ${props.iconClass}`} onClick={props.onClick}>{props.iconText}</span>
                </div>}
            </div>
        </div>
    )
}

export default InputField
