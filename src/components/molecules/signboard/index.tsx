import React from "react"
//comps
import List from "../../atoms/list"
import ScrollLink from "../scrollLink"
//styles
import './style.css'

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
