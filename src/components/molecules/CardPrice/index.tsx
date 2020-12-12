import React, {useLayoutEffect, useRef, useState} from "react";
import Card from "../../atoms/Card";
import Heading from "../../atoms/Heading";
import List from "../../atoms/List";
import font from './../../atoms/montserratBold/style.module.css'
import {PriceArrayType} from "../../../tsTypes";
import PortfolioLink from "../../atoms/PortfolioLink";
import './style.css'
import withRESTConnect, {RESTProps} from "../../hoc/withRestConnect";
import SvgDialog from "./svg/SvgDialog";
import cn from 'classnames'

interface CardPriceTypes {
    className?: string,
    item?: PriceArrayType,
    type?: 'tag',
    isHovered?: boolean,

}

const CardPrice: React.FC<RESTProps & CardPriceTypes> =
    ({className, item, data, type, isHovered}) => {
        const [height, setHeight] = useState(0);
        const cardItem = item || data.item || {};
        const {title, subTitle, list} = cardItem;
        const classNames = cn({
            cardPrice: true,
            cardPrice_hovered: isHovered,
            [`cardPrice_${type}`]: type,
            [`${className}`]: className
        });

        const contentRef = useRef<HTMLDivElement>(null);
        useLayoutEffect(() => {
            const curHeight = contentRef?.current?.offsetHeight ? contentRef?.current?.offsetHeight : 0;
            curHeight !== height && setHeight(curHeight)
        }, [isHovered, height]);
        return (

            <Card
                className={classNames}
                preview={
                    <>
                        <img
                            style={{height: height !== 0 ? `${height + 14}px` : 'auto'}}
                            className={'cardPrice__image'}
                            src={process.env.REACT_APP_IMAGES_PATH + '/image.png'}
                            alt=""
                        />
                        <SvgDialog height={height + 10} className={'cardPrice__svgDialog'}/>
                    </>
                }
                content={
                    <div className="cardPrice__content" ref={contentRef}>
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
                        <div
                            className={"cardPrice__definition " + font.montserratBold}>{cardItem.type}</div>
                        <div className="cardPrice__list">
                            <div className="cardPrice__listHeader">Создается с целью</div>
                            <List
                                type={'bullets'}
                                list={list}
                            />
                        </div>
                        {
                            !type && <PortfolioLink className={'cardPrice__link'}/>
                        }
                    </div>
                }
            >

            </Card>
        )
    };


export default withRESTConnect<RESTProps & CardPriceTypes>(CardPrice)
