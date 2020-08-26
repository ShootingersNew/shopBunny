import React from "react"
//comps
import Card from "../../atoms/Card"
//styles
import './style.css'
import fbold from '../../atoms/montserratBold/style.module.css'
import stars from './stars.svg'
import png from './user.png'
import cn from 'classnames'

type CardReviewPropTypes = {
    img: string,
    mark: 1 | 2 | 3 | 4 | 5,
    date: string,
    name: string,
    review: string
    type?: 'vertical'
    className?: string
};

const CardReview: React.FC<CardReviewPropTypes> = ({img, type, mark, date, name, review, className}) => {
    const cardClassName = cn({
        'cardReview': true,
        [`cardReview_${type}`]: type,
        [`${className}`]: className
    });
    return (
        <Card
            className={cardClassName}
            preview={
                <img src={png} alt={'name'} className={'cardReview__image'}/>
            }
            content={
                <div className="cardReview__content">
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
                </div>
            }
        />
    )
};
export default CardReview
