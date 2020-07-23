import React from "react";
import cn from 'classnames'

type TelephoneLink = {
    className?: string,
    children: string,
}
const TelephoneLink: React.FC<TelephoneLink> = ({className, children}) => {
    let linkClassName = cn({
        'telephoneLink': true,
        [`${className}`]: className
    });
    return (
        <a className={linkClassName} href={`tel:${children.replace(/\s+/g, '')}`}>
            {children}
        </a>
    )
};
export default TelephoneLink
