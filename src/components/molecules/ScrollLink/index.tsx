import React from "react"
//styles
import './style.css'
import cn from "classnames"
import s from '../../atoms/mainColor/style.module.css'
import f from '../../atoms/montserratBold/style.module.css'

//types
interface ScrollLinkPropTypes {
    className?: string,
    children: string,
    to: string
}

const ScrollLink: React.FC<ScrollLinkPropTypes> = ({children, className, to}) => {
    let classNames = cn({
        'scrollLink': true,
        [`${className}`]: className

    });
    return (
        <a href={to} className={classNames + ' ' + s.mainColor + ' ' + f.montserratBold}>
            {children}
        </a>
    )
};
export default ScrollLink
