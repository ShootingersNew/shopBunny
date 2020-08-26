import React from "react"
import Heading from "../../atoms/Heading"
import {ProductArrayType} from "../../../tsTypes"
import Tag from "../../atoms/Tag"
import Card from "../../atoms/Card";
import './style.css'

const CardProduct: React.FC<{ item: ProductArrayType }> = ({item}) => {
    return (
        <Card
            className={'cardProduct'}
            preview={
                <div className="cardProduct__image"/>
            }
            content={
                <div className="cardProduct cardProduct_content">
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
                            item.tags.map((tag): JSX.Element => {
                                return <Tag className={'cardProduct__tag'}>{tag}</Tag>
                            })
                        }
                    </footer>
                </div>
            }
        />
    )
};
export default CardProduct
