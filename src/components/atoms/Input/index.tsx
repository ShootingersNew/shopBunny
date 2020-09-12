//libs
import React from "react"
import classNames from 'classnames'
//styles
import './input.css'
import fm from '../../atoms/montserratMedium/style.module.css'

type InputTypes = {
    className?: string,
    onChange?: () => void,
    value?: string,
    placeholder?: string,
    name: string,
    isValid?: void,
    register?: any,
    defaultValue?: string,
    type?: 'textarea' | 'search'
};
const Input: React.FC<InputTypes> = ({name, className, placeholder, register, isValid, defaultValue, type}) => {
    let inputClass = classNames({
        'input': true,
        'input_isValid_true': isValid,
        [`input_type_${type}`]: type
    });
    let input;
    switch (type) {
        case "textarea":
            input =
                <span className={inputClass + ' ' + className}>
                    <textarea
                        name={name}
                        className={'input__field ' + fm.fontMontserratMedium}
                        placeholder={placeholder}
                        ref={register ? register : null}
                        defaultValue={defaultValue ? defaultValue : undefined}
                    />;
                </span>;
            break;
        case "search":
            input =
                <span className={inputClass + ' ' + className}>
                    <input
                        name={name}
                        type='text'
                        className={'input__field ' + fm.fontMontserratMedium}
                        placeholder={placeholder}
                        ref={register ? register : null}
                        defaultValue={defaultValue ? defaultValue : undefined}
                    />
                </span>;
            break;
        default:
            input =
                <span className={inputClass + ' ' + className}>

                    <input
                        name={name}
                        type='text'
                        className={'input__field ' + fm.fontMontserratMedium}
                        placeholder={placeholder}
                        ref={register ? register : null}
                        defaultValue={defaultValue ? defaultValue : undefined}
                    />
                </span>;
            break;
    }
    return (
        <React.Fragment>
            {input}
        </React.Fragment>
    )
};
export default Input
