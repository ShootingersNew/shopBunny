import React from "react"
import Heading from "../../atoms/Heading"
import {LinkItemType, ProductArrayType} from "../../../tsTypes"
import Tag from "../../atoms/Tag"
import Card from "../../atoms/Card";
import './style.css'

type CardProductPropTypes = {
    link?: string,
    item: ProductArrayType,
    onClick: (item: any) => void
}

const CardProduct: React.FC<CardProductPropTypes> = ({item, onClick, link}) => {
    const getItem: () => void = () => {
        onClick(item)
    };
    return (
        <Card
            onClick={getItem}
            className={'cardProduct'}
            preview={
                <img className={'cardProduct__image'} src={item.preview} alt={item.name}/>
            }
            link={link}
            content={
                <div className="cardProduct__content">
                    <header className={'cardProduct__header'}>
                        <Heading className={'cardProduct__name'} type={5}>
                            {item.name}
                        </Heading>
                        <span className="cardProduct__type">
                    {item.type}
              </span>
                    </header>
                    <footer className={'cardProduct__footer'}>
                        {console.log(item)}
                        {
                            item.cardTags && (item.cardTags as LinkItemType[]).map((tag, i): JSX.Element => {
                                return <Tag key={i} className={'cardProduct__tag'}>{tag.abbreviation}</Tag>
                            })
                        }
                    </footer>
                </div>
            }
        />
    )
};
export default CardProduct
