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
    to: number | undefined
}

const ScrollLink: React.FC<ScrollLinkPropTypes> = ({children, className, to}) => {
    let classNames = cn({
        'scrollLink': true,
        [`${className}`]: className

    });
    const clickHandler = () => {
        scrollToRef(to)
    };
    const scrollToRef = (to: number | undefined): void => {
        const BodySelector: HTMLBodyElement | null = document.querySelector('body');
        if (BodySelector !== null) {
            BodySelector.scrollTo({
                top: to,
                behavior: "smooth"
            })
        }
    };
    return (
        <a className={classNames + ' ' + s.mainColor + ' ' + f.montserratBold} onClick={clickHandler}>
            {children}
        </a>
    )
};
export default ScrollLink
