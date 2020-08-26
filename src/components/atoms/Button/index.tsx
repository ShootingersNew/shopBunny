import React from "react"
import {Link} from "react-router-dom"
//styles
import cn from 'classnames'
import './style.css'

//types
interface ButtonPropTypes {
    ePrevent?: boolean,
    onClick?: (e: React.MouseEvent) => void,
    mod?: string,
    className?: string,
    type?: 'link' | 'input',
    disabled?: boolean,
    children?: string
    link?: string
}

const Button: React.ForwardRefExoticComponent<ButtonPropTypes> = React.forwardRef(({ePrevent, onClick, mod, className, type, children, disabled, link}, ref) => {
        function clickHandler(e: React.MouseEvent) {
            if (ePrevent) {
                e.preventDefault()
            }
            if (onClick) {
                onClick(e)
            }
        }

        const btnClassname = cn({
            'button': true,
            [`button_${mod}`]: mod,
            [`${className}`]: className
        });
        let button;
        switch (type) {
            case 'link':
                button = <Link to={`${link}`} className={btnClassname + ' button_type_link'}> {children} </Link>;
                break;
            case 'input' :
                button = <input
                    type={'submit'}
                    className={btnClassname + ' button_type_input'}
                    disabled={disabled}
                    value={children}
                />;
                break;
            default:
                button =
                    <button

                        className={btnClassname + ' button_type_default '}
                        onClick={clickHandler}
                        disabled={disabled ? disabled : false}
                    >
                        {children}
                    </button>;
        }

        return (
            <React.Fragment>
                {button}
            </React.Fragment>
        )

    }
);
export default Button
