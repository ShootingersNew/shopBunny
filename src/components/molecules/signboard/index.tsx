import React from "react"
import List from "../../atoms/list"
import './style.css'

import ScrollLink from "../scrollLink"

const Signboard: React.FC<{ linkTo: number | undefined }> = ({linkTo}) => {
    return (
        <div className={'signboard'}>
            <List
                list={['Печатная продукция', 'Фирменный стиль', 'Сайты']}
                listClassName={'signboard__list'}
                listItemClassName={'signboard__list-item'}
            />
            <ScrollLink className={'signboard__link'} to={linkTo}>Смотреть портфолио</ScrollLink>

        </div>
    )
};

export default Signboard
