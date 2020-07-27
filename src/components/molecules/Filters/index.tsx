import React from "react";
import Tag from "../../atoms/Tag";
import cn from 'classnames'
import './style.css'
import c from '../../atoms/mainColor/style.module.css'

const Filters: React.FC<{ arr: string[], className?: string }> = ({arr, className}) => {
    const classNames = cn({
        filters: true,
        [`${className}`]: className
    });
    return (
        <div className={classNames}>
            {
                arr.map((str, idx) => {
                    if (idx === 0) {
                        return <Tag className={'filters__tag ' + c.mainColor}>{str}</Tag>
                    } else {
                        return <Tag className={'filters__tag'}>{str}</Tag>
                    }
                })
            }
            <a href="#" className="filters__link">Смотреть все</a>
        </div>
    )
};
export default Filters
