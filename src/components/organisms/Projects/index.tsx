import React from "react"
import './style.css'
import Subheader from "../../molecules/Subheader"
import ColumnsWrapper from "../../molecules/ColumnsWrapper"
import CardProduct from "../../molecules/CardProduct"
import {ProductArrayType} from "../../../tsTypes"
import Filters from "../../molecules/Filters";

const array: ProductArrayType[] = [
    {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    },
    {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    }, {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    }, {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    }, {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    }, {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    }, {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    }, {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    },
    {
        preview: '#',
        name: 'Janosy',
        type: 'Compact online store',
        tags: ['Компакт интернет-магазин', 'Фирменный стиль']
    }
];
const tagsArray: string[] = [
    'Избранные проекты',
    'Многостраничная полиграфия',
    'Печатная продукция',
    'Сложный web-проект',
    'Компактный интернет-магазин',
    'Лендинг',
    'Сайт-визитка',
    'Социальные сети',
    'Интернет-магазин'
];
type ProjectPropTypes = {
    isWithContent?: boolean
}
const Projects: React.FC<ProjectPropTypes> = ({isWithContent}) => {
    return (
        <section className={'projects'}>
            <Subheader
                className={'projects__header'}
                content={<Filters className={'projects__filters'} arr={tagsArray}/>}
            >
                Проекты
            </Subheader>
            <ColumnsWrapper
                type={"showcase"}
                items={array}
                card={(item) => <CardProduct item={item as ProductArrayType}/>}
            />
        </section>
    )
};
export default Projects
