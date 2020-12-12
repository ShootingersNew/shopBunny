import React, {useEffect, useRef, useState} from "react";
import './style.css'
import Container from "../../atoms/Container";
import Slider, {Settings} from "react-slick";
import Subheader from "../Subheader";
import Heading from "../../atoms/Heading";
import {isMobileOnly} from "react-device-detect";
import {useIframeRes} from "../../_settings/_utils";

type SlidesTypes = {
    header: string,
    back: string,
    text: string,
    title: string
}

const SlickSlider: React.FC<{ slides: SlidesTypes[] }> = ({slides}) => {
    const settings: Readonly<Settings> = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        lazyLoad: "ondemand",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        beforeChange(oldIndex: number, newIndex: number): void {
            setSlideProgress(0);
            setActiveSlider(newIndex);
        },
    };
    const isMobile = useIframeRes() === 'mobile';
    const [activeSlider, setActiveSlider] = useState<number>(0);
    const [slideProgress, setSlideProgress] = useState<number>(0);
    const slider = useRef<Slider>(null);
    let timer: any;
    const dotWidth = isMobileOnly || isMobile ? `calc(${100 / slides.length}vw - 1px)` : `calc(100% / ${slides.length})`;
    useEffect(() => {
        const progressChangeSlides: () => void = () => {
            const time = settings.autoplaySpeed as number / 100;
            timer = setTimeout(() => {
                let count = slideProgress + 1;
                if (count <= 100) {
                    setSlideProgress(count);
                } else {
                    slider?.current?.slickGoTo(activeSlider + 1)
                }
            }, time);
        };
        progressChangeSlides();
        return () => clearTimeout(timer);
    }, [slideProgress, activeSlider, timer]);

    function goTo(e: React.MouseEvent<HTMLDivElement>): void {
        const idx = Number((e.target as HTMLDivElement).getAttribute('data-slick'));
        slider?.current?.slickGoTo(idx);
    }

    return (
        <section className="slider">
            <Subheader>Снижаем риски</Subheader>
            <Slider ref={slider} {...settings}>
                {slides.map((item, idx) => {
                    return (
                        <div key={idx} className={"slider__item"}>
                            <div className="slider__container container">
                                <div className="slider__background"
                                     style={{backgroundImage: 'url(' + item.back + ')'}}/>

                            </div>
                        </div>
                    )
                })}
            </Slider>
            {/*делаю кастом дотс, чтобы не колдовать с базовым методом slick*/}
            <Container className={'slider__content-wrapper'}>
                <div className="slider__content">
                    <div className="slider__info">
                        <Heading className={'slider__title'} type={3}>
                            {slides[activeSlider].title}
                        </Heading>
                        <div className="slider__text">
                            {slides[activeSlider].text}
                        </div>
                    </div>
                    <div className="slider__dots-wrapper">
                        {slides.map((item, idx) => {
                            let cn = 'slider__dot';
                            if (idx === activeSlider) {
                                cn = cn + ' slider__dot_active'
                            }
                            return (
                                <div
                                    key={idx}
                                    data-slick={idx}
                                    className={cn}
                                    onClick={(e) => {
                                        goTo(e)
                                    }}
                                    style={{
                                        backgroundImage: 'url(' + item.back + ')',
                                        width: dotWidth
                                    }}
                                >
                                    {
                                        idx === activeSlider &&
                                        <div style={{width: `${slideProgress}%`}} className="slider__progress"/>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
};
export default SlickSlider
