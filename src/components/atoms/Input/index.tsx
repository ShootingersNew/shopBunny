//libs
import React from "react"
import classNames from 'classnames'
//styles
import './input.css'

type InputTypes = {
    className?: string,
    onChange?: () => void,
    value?: string,
    placeholder?: string,
    name: string,
    isValid?: void,
    register?: any,
    defaultValue?: string,
    type?: 'textarea'
};
const Input: React.FC<InputTypes> = ({name, className, placeholder, register, isValid, defaultValue, type}) => {
    let inputClass = classNames({
        'input fonts__proximaNovaRegular': true,
        'input_isValid_true': isValid,
    });
    return (
        <React.Fragment>
            {
                type === 'textarea' ?
                    <textarea
                        name={name}
                        className={inputClass + ' ' + className}
                        placeholder={placeholder}
                        ref={register ? register : null}
                        defaultValue={defaultValue ? defaultValue : undefined}
                    />
                    :
                    <input
                        name={name}
                        type='text'
                        className={inputClass + ' ' + className}
                        placeholder={placeholder}
                        ref={register ? register : null}
                        defaultValue={defaultValue ? defaultValue : undefined}
                    />
            }
        </React.Fragment>
    )
};
export default Input
