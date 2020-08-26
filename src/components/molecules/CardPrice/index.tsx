import React from "react";
import Card from "../../atoms/Card";
import Heading from "../../atoms/Heading";
import List from "../../atoms/List";
import font from './../../atoms/montserratBold/style.module.css'
import {PriceArrayType} from "../../../tsTypes";
import ScrollLink from "../ScrollLink";
import './style.css'

interface CardPriceTypes extends PriceArrayType {
    scrollTo: number | undefined,
    className: string
}

const CardPrice: React.FC<CardPriceTypes> = ({title, subTitle, className, type, list, scrollTo}) => {
    return (
        <Card
            className={'cardPrice'}
            preview={<img src={process.env.REACT_APP_IMAGES_PATH + '/image.png'} alt=""/>}
            content={
                <div className="cardPrice__content">
                    <Heading className={'cardPrice__header'} type={3}>{title}</Heading>
                    <strong className={'cardPrice__subtitle ' + font.montserratBold}>

                        {
                            typeof subTitle === 'object' ?
                                (subTitle as []).map((string) => (
                                    <span className={'cardPrice__subtitle'}>{string} </span>
                                ))
                                :
                                subTitle
                        }
                    </strong>
                    <div className={"cardPrice__definition " + font.montserratBold}>{type}</div>
                    <div className="cardPrice__list">
                        <div className="cardPrice__listHeader">Создается с целью</div>
                        <List
                            type={'bullets'}
                            list={list}
                        />
                    </div>
                    <ScrollLink to={scrollTo}>Смотреть портфолио ></ScrollLink>
                </div>
            }
        >

        </Card>
    )
};

export default CardPrice
