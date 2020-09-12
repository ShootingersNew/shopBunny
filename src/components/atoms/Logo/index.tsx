import React from "react"
import {Link} from "react-router-dom"
//styles
import cn from '../montserratBlack/style.module.css'
import './style.css'
//types
type LogoPropTypes = {
    text: string,
    img: any
}

const Logo: React.FC<LogoPropTypes> = ({text, img}) => {
    return (
        <Link to={'/'} className={'logo__link'}>
            <div className="logo__img-container">
                <img src={img} alt={text}/>
            </div>
            <span className={`logo__text ${cn.fontMontserratBlack}`}>{text}</span>
        </Link>
    )
};
export default Logo
