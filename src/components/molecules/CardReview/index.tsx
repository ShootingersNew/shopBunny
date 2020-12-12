import React, {createRef, useEffect, useState} from "react"
import {isMobileOnly} from "react-device-detect";
//comps
import Card from "../../atoms/Card"
import Container from "../../atoms/Container"
//styles
import './style.css'
import fbold from '../../atoms/montserratBold/style.module.css'
import stars from './stars.svg'

import cn from 'classnames'
import {useIframeRes} from "../../_settings/_utils";

type CardReviewPropTypes = {
    img: string,
    mark: 1 | 2 | 3 | 4 | 5,
    date: string,
    name: string,
    review: string
    type?: 'vertical'
    className?: string,
    isClosed?: boolean
};

const CardReview: React.FC<CardReviewPropTypes> = ({img, type, mark, date, name, review, className, isClosed}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0);
    const cardClassName = cn({
        'cardReview': true,
        [`cardReview_${type}`]: type,
        [`${className}`]: className
    });
    const contentRef = createRef<HTMLDivElement>();
    const imageRef = createRef<HTMLImageElement>();
    const isMobile = useIframeRes() === 'mobile';
    const openCard = () => {
        setIsOpened(true)
    };

    const contentClassNames = cn({
        cardReview__content: true,
        [` cardReview__content_opened_${isOpened}`]: true
    });
    const getHeightItem: () => number = () => {
        const content = contentRef.current?.offsetHeight;
        const img = imageRef.current?.offsetHeight;
        if (content !== undefined && img !== undefined) {
            return content + 25
        } else return 0
    };
    useEffect(() => {
        if (getHeightItem() !== 0) {
            setHeight(getHeightItem())
        }
        if (isClosed !== undefined && isClosed && isOpened) {
            setIsOpened(false)
        }
    }, [isClosed, getHeightItem, isOpened]);

    const animHeight: () => string | number = () => {
        if (isMobileOnly || isMobile) {
            if (!isOpened) {
                return '300px'
            } else {
                return `${height}px`
            }
        } else {
            return 'auto'
        }
    };
    return (
        <Card
            className={cardClassName}
            preview={
                <img src={img} alt={'name'} ref={imageRef} className={'cardReview__image'}/>
            }
            content={
                <div className="cardReview__animWrapper" style={{height: animHeight()}}>
                    <div className={contentClassNames} ref={contentRef}>
                        <header className={'cardReview__header'}>
                            <div className={'cardReview__stars'} style={{position: "relative"}}>
                                <img className={'cardReview__starsImage'} src={stars} alt="Звездочки"/>
                                <div className={'cardReview__back'} style={{width: `${100 - mark * 20}%`}}/>
                            </div>
                            <span className="cardReview__date">{date}</span>
                            <span className={"cardReview__name " + fbold.montserratBold}>{name}</span>
                        </header>
                        <main className={'cardReview__text'}>
                            {
                                review
                            }
                        </main>
                        <div className={'cardReview__open'} onClick={openCard}>
                            <Container className="container_mobile">
                                efwefwefwe
                            </Container>
                        </div>
                    </div>
                </div>
            }
        />
    )
};
export default CardReview
