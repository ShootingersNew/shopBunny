import React from "react"
import cn from 'classnames'
import './style.css'
import Container from "../Container";

const Copyrights: React.FC<{ classNames?: string }> = ({classNames}) => {
    const copyrightsClassnames = cn({
        'copyrights': true,
        [`${classNames}`]: classNames
    });
    return (
        <div className={copyrightsClassnames}>
            <Container className={'container_mobile'}>
                <span className="copyrights__text"> Bunny studio</span>
                <span className="copyrights__greyText copyrights__separator"> / </span>
                <span className="copyrights__text"> Все права защищены <span
                    className="copyrights__greyText">2020</span></span>
            </Container>
        </div>
    )
};

export default Copyrights
