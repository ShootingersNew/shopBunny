import React from "react"
//comps
import Heading from "../../atoms/Heading"
import Signboard from "../../molecules/Signboard"
import Container from "../../atoms/Container"
//styles
import './style.css'

const Headline: React.FC<{ linkTo: number | undefined, img: string }> = ({linkTo, img}) => {
    return (
        <div className={'headline'} style={{backgroundImage: `url(${img})`}}>
            <Container className={'headline__container'}>
                <Heading className={'headline__header'} type={1}>
                    Дизайн для Бизнеса
                </Heading>
            </Container>
            <Container className={'signboard__container'}>
                <Signboard linkTo={linkTo}/>
            </Container>
        </div>
    )
};
export default Headline
