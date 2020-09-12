import React from "react"
//comps
import List from "../../atoms/List"
//styles
import cn from 'classnames'
import './style.css'
// types
import {LinkItemType} from "../../../tsTypes";

type NavPropTypes = {
    className?: string,
    navArr: Array<LinkItemType>
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
