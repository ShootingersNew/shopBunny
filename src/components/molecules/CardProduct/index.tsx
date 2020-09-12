import React from "react"
import Heading from "../../atoms/Heading"
import {LinkItemType, ProductArrayType} from "../../../tsTypes"
import Tag from "../../atoms/Tag"
import Card from "../../atoms/Card";
import './style.css'

const CardProduct: React.FC<{ item: ProductArrayType, onClick: (item: any) => void }> = ({item, onClick}) => {
    const getItem: () => void = () => {
        onClick(item)
    };
    return (
        <Card
            onClick={getItem}
            className={'cardProduct'}
            preview={
                <div className="cardProduct__image"/>
            }
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
                        {
                            item.cardTags && (item.cardTags as LinkItemType[]).map((tag): JSX.Element => {
                                return <Tag className={'cardProduct__tag'}>{tag.abbreviation}</Tag>
                            })
                        }
                    </footer>
                </div>
            }
        />
    )
};
export default CardProduct
