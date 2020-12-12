import React from "react"
//styles
import cn from 'classnames'
import './style.css'
import {Link} from "react-router-dom";
//types
type ListPropTypes = {
    list: ListObjKeys[] | string[],
    listClassName?: string,
    listItemClassName?: string,
    type?: 'bullets'
};
type ListObjKeys = {
    link?: string,
    title: string,
}

const List: React.FC<ListPropTypes> = ({list, listClassName, listItemClassName, type}) => {
    let listClassNames = cn({
        list: true,
        [`${listClassName}`]: listClassName
    });
    let listItemClassNames = cn({
        'list__item': true,
        [`${listItemClassName}`]: listItemClassName,
        [`list_type_${type}`]: type
    });

    let mapItem: (item: ListObjKeys | string, idx: number) => JSX.Element;
    mapItem = (item, idx) => {
        if (typeof item !== "string") {
            return (
                <li className={listItemClassNames} key={idx}>
                    <Link className={'list__link'} to={`${item.link}`}>
                        {item.title}
                    </Link>
                </li>
            )
        } else {
            return (
                <li className={listItemClassNames}>
                    {
                        type === 'bullets' && <span className={'list__bullets'}>+ </span>
                    }
                    <span className="list__content">  {item}</span>
                </li>

            )
        }

    };

    return <ul className={listClassNames}>
        {
            list && (list as any[]).map((item, idx): JSX.Element => (
                mapItem(item, idx)
            ))
        }

    </ul>
};
export default List
