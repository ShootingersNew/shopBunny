import React from "react"
import cn from 'classnames'

type CardPropTypes = {
    className?: string,
    content: JSX.Element,
    preview: JSX.Element
};

const Card: React.FC<CardPropTypes> = ({className, content, preview}) => {
    const classNames = cn({
        card: true,
        [`${className}`]: className
    });
    return (
        <article className={classNames}>
            {preview}
            {content}
        </article>
    )
};
export default Card
