import React from "react"
import cn from 'classnames'
import Container from "../Container";
import {Link} from "react-router-dom";
import './style.css'

type CardPropTypes = {
    className?: string,
    content: JSX.Element,
    preview: JSX.Element,
    onClick?: (item?: any) => void,
    link?: string
};

const Card: React.FC<CardPropTypes> = ({link, onClick, className, content, preview}) => {
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
            {
                link && <Link className={"card__link"} to={link}/>
            }
        </article>
    )
};
export default Card
