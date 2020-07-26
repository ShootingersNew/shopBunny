import React from "react";
import List from "../../atoms/list";
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
            <List
                list={[{title: 'Портфолио', link: '#'}, {title: 'Услуги', link: '#'}, {title: 'Блог', link: '#'}]}
                listClassName={'topNav__list'}
                listItemClassName={'topNav__list-item'}
            />
        </nav>
    )
};
export default TopNav
