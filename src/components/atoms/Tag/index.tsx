import React from "react";
import cn from 'classnames'
import './style.css'

const Tag: React.FC<{ filterClickHandler?: (val: string) => void, className?: string, link?: string }> =
    ({filterClickHandler, children, link, className}) => {
        const classNames = cn({
            tag: true,
            [`${className}`]: className
        });
        const clickHandler: (e: React.MouseEvent) => void = (e) => {
            const filter = (e.target as HTMLElement).getAttribute('data-tag');
            if (filterClickHandler) {
                filterClickHandler(filter as string)
            }
        };

        return (
            <React.Fragment>
                {
                    link ?
                        <span onClick={clickHandler} data-id={link} data-tag={children} className={classNames}>
                        #{children}
                    </span>
                        :
                        <span onClick={clickHandler} className={classNames}>
                        #{children}
                    </span>
                }
            </React.Fragment>
        )
    };
export default Tag
