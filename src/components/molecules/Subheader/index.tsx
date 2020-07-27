import React from "react";
import Container from "../../atoms/Container";
import Heading from "../../atoms/Heading";
import './style.css'
import cn from 'classnames'

type SubheaderPropTypes = {
    content?: JSX.Element,
    children: string,
    className?: string
}
const Subheader: React.FC<SubheaderPropTypes> = ({content, children, className}) => {
    const classNames = cn({
        subheader: true,
        'subheader_with-content': content,
        [`${className}`]: className
    });
    return (
        <Container className={classNames}>
            <Heading type={2}>{children}</Heading>
            {
                content &&
                <div className="subheader__content">
                    {content}
                </div>
            }
        </Container>
    )
};
export default Subheader
