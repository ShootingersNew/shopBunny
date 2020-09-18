import React from "react"
import Input from "../Input"
import cn from 'classnames'
import './style.css'

type TagPropTypes = {
    changeHandler?: (val: string) => void,
    className?: string,
    link?: string,
    name?: string,
    defaultChecked?: boolean,
    type?: 'radio' | 'checkbox'
}
const Tag: React.FC<TagPropTypes> =
    ({
         changeHandler,
         children,
         link,
         className,
         name = 'default',
         defaultChecked = false,
         type = 'checkbox',
     }) => {
        const classNames = cn({
            tag: true,
            [`${className}`]: className
        });
        const tagChangeHandler: (e: React.FormEvent) => void = (e) => {
            const filter = (e.target as HTMLElement).getAttribute('data-id');
            console.log('eeeee');
            if (changeHandler) {

                changeHandler(filter as string)
            }
        };
        return (
            <React.Fragment>
                {
                    link ?
                        <label>
                            <Input
                                type={type}
                                onChange={tagChangeHandler}
                                name={name}
                                id={link}
                                data-tag={children}
                                className={classNames}
                                defaultChecked={defaultChecked}
                                defaultValue={children as string}
                            >
                                <span className="tag__text">
                                    #{children}
                                </span>
                            </Input>
                        </label>
                        :
                        <span className={classNames}>#{children}</span>
                }
            </React.Fragment>
        )
    };
export default Tag
