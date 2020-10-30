import React from "react"
import {Link} from "react-router-dom"
import cn from 'classnames'
//styles
import f from '../montserratBlack/style.module.css'
import './style.css'
//types
type LogoPropTypes = {
    text: string,
    img: any,
    className?: string
}

const Logo: React.FC<LogoPropTypes> = ({text, img, className}) => {
        const logoClassNames = cn({
            'logo__link': true,
            [`${className}`]: className
        });
        return (
            <Link to={'/'} className={logoClassNames}>
                <div className="logo__img-container">
                    <img src={img} alt={text}/>
                </div>
                <span className={`logo__text ${f.fontMontserratBlack}`}>{text}</span>
            </Link>
        )
    }
;
export default Logo
