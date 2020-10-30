import React from "react"
//styles
import cn from 'classnames'
import './style.css'
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
        [`${listItemClassName}`]: listItemClassName
    });

    let mapItem: (item: ListObjKeys | string, idx: number) => JSX.Element;
    mapItem = (item, idx) => {
        if (typeof item !== "string") {
            return (
                <li className={listItemClassNames} key={idx}>
                    <a className={'list__link'} href={`${item.link}`}>
                        {item.title}
                    </a>
                </li>
            )
        } else {
            return (
                <li className={listItemClassNames}>
                    {
                        type === 'bullets' && <span className={'list__bullets'}>+ </span>
                    }
                    {item}
                </li>

            )
        }

    };

    return <ul className={listClassNames}>
        {
            (list as any[]).map((item, idx): JSX.Element => (
                mapItem(item, idx)
            ))
        }

    </ul>
};
export default List
