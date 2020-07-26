import React from "react";
import Heading from "../../atoms/heading";
import './style.css'
import Signboard from "../../molecules/signboard";
import Container from "../../atoms/container";

const Headline: React.FC<{ linkTo: number | undefined, img: string }> = ({linkTo, img}) => {
    return (
        <div className={'headline'} style={{backgroundImage: `url(${img})`}}>
            <Container>
                <Heading className={'headline__header'} type={1}>
                    Дизайн для Бизнеса
                </Heading>
                <Signboard linkTo={linkTo}/>
            </Container>
        </div>
    )
};
export default Headline
