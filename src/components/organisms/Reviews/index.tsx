import React, {useEffect, useRef, useState} from "react"
import Subheader from "../../molecules/Subheader"
import CardReview from "../../molecules/CardReview"
import Slider from "react-slick"
import {isMobileOnly} from "react-device-detect"
//styles
import './style.css'
import withRESTConnect, {RESTProps} from "../../hoc/withRestConnect";
import {useIframeRes} from "../../_settings/_utils";

const Reviews: React.FC<RESTProps> = ({data: {reviews}}) => {
    const [height, setHeight] = useState<number>(596);
    const [isClosed, setIsClosed] = useState(false);
    const slider = useRef<Slider>(null);
    useEffect(() => {

    });
    const clickHandler: (height: number) => void = (height) => {
        setHeight(height);
    };
    const changeSlides = () => {
        setIsClosed(true);
        setTimeout(() => {
            setIsClosed(false)
        }, 300)
    };
    const isMobile = useIframeRes() === 'mobile';
    const mapReviews: () => JSX.Element[] | undefined = () => {
        return (
            reviews && reviews.map((item, idx) => {
                let type: "vertical" | undefined = undefined;
                if (idx === 0) {
                    type = 'vertical';
                }
                return (
                    <CardReview
                        className={'reviews__card'}
                        type={type}
                        img={item.preview}
                        review={item.text}
                        // @ts-ignore
                        mark={item.mark}
                        date={item.date}
                        name={'Михаил'}
                        isClosed={isClosed}
                    />
                )
            })
        )
    };
    return (
        <section className="reviews">
            <Subheader>
                Отзывы
            </Subheader>
            {
                !(isMobileOnly || isMobile) ?
                    <div className="reviews__content">
                        {
                            mapReviews()
                        }

                    </div>
                    :
                    <Slider arrows={false} ref={slider} slidesToShow={1} beforeChange={changeSlides}>
                        {
                            mapReviews()
                        }
                    </Slider>
            }
            {/*    condition rendering end*/}
        </section>

    )
};
export default withRESTConnect<RESTProps>(Reviews)
