import React from "react"
//comps
import List from "../../atoms/List"
//styles
import cn from 'classnames'
import './style.css'
// types
type NavPropTypes = {
    className?: string,
    navArr: Array<navArrTypes>
}
type navArrTypes = {
    title: string,
    link: string
}
const Nav: React.FC<NavPropTypes> = ({className, navArr}) => {
    let navClass = cn(
        {
            [`${className}`]: className,
            nav: true
        }
    );
    return (
        <nav className={navClass}>
            <List
                list={navArr}
                listClassName={'nav__list'}
                listItemClassName={'nav__list-item'}
            />
        </nav>
    )
};
export default Nav
