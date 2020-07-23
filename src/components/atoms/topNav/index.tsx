import React from "react";
import cn from 'classnames'
import './style.css'

type TopNavPropTypes = {
    className?: string,
    navArr: Array<navArrTypes>
}
type navArrTypes = {
    title: string,
    link: string
}
const TopNav: React.FC<TopNavPropTypes> = ({className}) => {
    let topNavClass = cn(
        {
            [`${className}`]: className,
            topNav: true
        }
    );
    return (
        <nav className={topNavClass}>
            <ul className="topNav__list">
                <li className="topNav__list-item">
                    <a href="" className="topNav__link">Портфолио</a>
                </li>
                <li className="topNav__list-item">
                    <a href="" className="topNav__link">Услуги</a>
                </li>
                <li className="topNav__list-item">
                    <a href="" className="topNav__link">Блог</a>
                </li>
            </ul>
        </nav>
    )
};
export default TopNav
