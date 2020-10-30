import React from "react"
import cn from 'classnames'
import Container from "../Container";

type CardPropTypes = {
    className?: string,
    content: JSX.Element,
    preview: JSX.Element,
    onClick?: (item?: any) => void
};

const Card: React.FC<CardPropTypes> = ({onClick, className, content, preview}) => {
    const classNames = cn({
        card: true,
        [`${className}`]: className
    });
    const clickHandler = () => {
        if (onClick !== undefined) {
            onClick();
        } else {
            return false;
        }
    };
    return (
        <article className={classNames} onClick={clickHandler}>
            {preview}
            <Container className="card__container">
                {content}
            </Container>
        </article>
    )
};
export default Card
