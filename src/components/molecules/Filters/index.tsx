import React, {useState} from "react"
import cn from 'classnames'

import Tag from "../../atoms/Tag"
import Input from "../../atoms/Input"
//styles
import './style.css'
import c from '../../atoms/mainColor/style.module.css'
import accent from '../../atoms/mainColor/style.module.css'
//types
import {LinkItemType} from "../../../tsTypes"

type FiltersPropTypes = {
    filterClickHandler: (val: string) => void,
    clearFilter?: () => void,
    arr: LinkItemType[],
    className?: string,
    type?: 'accentButton',
    isWithSwitch?: boolean,
    isWithClearButton?: boolean,
    search?: () => void
}
const Filters: React.FC<FiltersPropTypes> =
    ({search, arr, className, type, isWithSwitch, filterClickHandler, clearFilter, isWithClearButton}) => {
        const [isOpen, setIsOpen] = useState(false);
        const classNames = cn({
            filters: true,
            [`${className}`]: className,
            'filters_withSwitch': isWithSwitch,
            'filters_withSearch': search,
            'filters_opened': isOpen
        });
        const linkClassNames = cn({
            'filters__link': true,
            [`${accent.mainColor}`]: type !== "accentButton" && isWithSwitch
        });
        const openClickHandler = () => {
            setIsOpen(true)
        };
        return (
            <div className={classNames}>
                <div className="filters__wrapper">
                    {
                        isWithSwitch && !isOpen &&
                        <span className="filters__openButton" onClick={openClickHandler}>Фильтры</span>
                    }
                    {
                        arr.map((linkItem, idx) => {
                            if (idx === 0 && type === 'accentButton') {
                                return <Tag filterClickHandler={filterClickHandler}
                                            className={'filters__tag ' + c.mainColor}
                                            link={linkItem.link}>{linkItem.title}</Tag>
                            } else {
                                return <Tag filterClickHandler={filterClickHandler} link={linkItem.link}
                                            className={'filters__tag'}>{linkItem.title}</Tag>
                            }
                        })
                    }
                    {isWithClearButton !== false && <Tag filterClickHandler={clearFilter}>Смотреть все</Tag>}
                </div>
                {search && <Input type={'search'} className={'filters__search'} name={'search'}
                                  placeholder='Поиск по более чем 300 статьям'/>}
            </div>
        )
    };
export default Filters
