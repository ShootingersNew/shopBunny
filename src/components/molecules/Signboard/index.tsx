import React from "react"
//comps
import List from "../../atoms/List"
//styles
import './style.css'
import Container from "../../atoms/Container";
import PortfolioLink from "../../atoms/PortfolioLink";

const Signboard: React.FC<{ linkTo: string }> = ({linkTo}) => {
    return (
        <div className={'signboard'}>
            <Container>
                <List
                    list={['Печатная продукция', 'Фирменный стиль', 'Сайты']}
                    listClassName={'signboard__list'}
                    listItemClassName={'signboard__list-item'}
                />
                <PortfolioLink className={'signboard__link '}/>
            </Container>

        </div>
    )
};

export default Signboard
