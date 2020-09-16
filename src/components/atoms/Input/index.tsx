//libs
import React from "react"
import classNames from 'classnames'
//styles
import './input.css'
import fm from '../../atoms/montserratMedium/style.module.css'

type InputTypes = {
    className?: string,
    onChange?: (e: React.FormEvent) => void,
    value?: string,
    placeholder?: string,
    name: string,
    isValid?: void,
    register?: any,
    defaultValue?: string,
    type?: 'textarea' | 'search' | 'radio' | 'checkbox',
    defaultChecked?: boolean,
    id?: string
};
const Input: React.FC<InputTypes> = ({children, id, name, className, placeholder, register, isValid, defaultValue, type, defaultChecked}) => {
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
        case "radio":
            input =
                <div className={inputClass + ' ' + className}>
                    <input
                        name={name}
                        type='radio'
                        className={'input__radio'}
                        defaultChecked={defaultChecked}
                        ref={register ? register : null}
                        value={defaultValue}
                        data-id={id}
                    />
                    {children}
                </div>;
            break;
        case "checkbox":
            input =
                <div className={inputClass + ' ' + className}>
                    <input
                        name={name}
                        type='checkbox'
                        className={'input__checkbox'}
                        defaultChecked={defaultChecked}
                        ref={register ? register : null}
                        value={defaultValue}
                        data-id={id}
                    />
                    {children}
                </div>;
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
