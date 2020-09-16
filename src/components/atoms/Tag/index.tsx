import React from "react"
import Input from "../Input"
import cn from 'classnames'
import './style.css'

type TagPropTypes = {
    filterClickHandler?: (val: string) => void,
    className?: string,
    link?: string,
    name?: string,
    defaultChecked?: boolean,
    type?: 'radio' | 'checkbox'
}
const Tag: React.FC<TagPropTypes> =
    ({
         filterClickHandler,
         children,
         link,
         className,
         name = 'default',
         defaultChecked = false,
         type = 'radio'
     }) => {
        const classNames = cn({
            tag: true,
            [`${className}`]: className
        });
        const clickHandler: (e: React.FormEvent) => void = (e) => {
            const filter = (e.target as HTMLElement).getAttribute('data-id');
            if (filterClickHandler) {
                filterClickHandler(filter as string)
            }
        };
        return (
            <React.Fragment>
                {
                    link ?
                        <label>
                            <Input
                                type={type}
                                onChange={clickHandler}
                                name={name}
                                id={link}
                                data-tag={children}
                                className={classNames}
                                defaultChecked={defaultChecked}
                                defaultValue={children as string}
                            />
                            #{children}
                        </label>
                        :
                        <Input defaultChecked={defaultChecked} className={className} name={name} type={type}
                               onChange={clickHandler}>#{children}</Input>
                }
            </React.Fragment>
        )
    };
export default Tag
