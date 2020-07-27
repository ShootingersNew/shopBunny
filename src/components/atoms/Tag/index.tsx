import React from "react";
import cn from 'classnames'
import './style.css'

const Tag: React.FC<{ className?: string }> = ({children, className}) => {
    const classNames = cn({
        tag: true,
        [`${className}`]: className
    });


    return (
        <span className={classNames}>
            #{children}
        </span>
    )
};
export default Tag
