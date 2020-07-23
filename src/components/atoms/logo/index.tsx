import React from "react";
//styles
import cn from '../montserratBlack/style.module.css'
import './style.css'

type LogoPropTypes = {
    text: string,
    img: any
}
const Logo: React.FC<LogoPropTypes> = ({text, img}) => {
    return (
        <a href="#" className={'logo'}>
            <div className="logo__img-container">
                <img src={img} alt={text}/>
            </div>
            <span className={`logo__text ${cn.fontMontserratBlack}`}>{text}</span>
        </a>
    )
};
export default Logo
