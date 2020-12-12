import React from "react"
//comps
import Index from "../../templates/LandingTemplate"
import Header from "../../organisms/Header"
import Headline from "../../organisms/Headline"
import ItemsWithFilter from "../../organisms/ItemsWithFilter";
import SlickSlider from "../../molecules/Slick";
import PriceList from "../../organisms/PriceList";
import slide from './img/slid.jpg'
//styles
import back from './img/back.jpg'
import Staff from "../../organisms/Staff";
import Guarantees from "../../organisms/Guarantees";
import Subscribe from "../../organisms/Subscribe";
import Reviews from "../../organisms/Reviews";
import ContactUs from "../../organisms/contactUs";
import Footer from "../../organisms/Footer";


const LandingPage: React.FC = () => {
    return (
        <Index
            header={
                <Header
                    scrollTo={"#contact"}
                />
            }
            headline={
                <Headline img={back} linkTo={"#contact"}/>
            }
            projects={
                <ItemsWithFilter
                    url={'projects'}
                    heading={true}
                    isFiltersWithDesc={true}
                />
            }
            seoSlider={
                <SlickSlider
                    slides={[
                        {
                            back: slide,
                            header: 'eee',
                            title: 'Продвинутая аналитика',
                            text: 'Подберем и проанализируем информацию для проекта, чтобы определить целевую аудиторию для получения заявок только заинтересованных потребителей'
                        },
                        {
                            back: slide,
                            header: 'eee',
                            title: 'Продвинутая аналитика',
                            text: 'Подберем и проанализируем информацию для проекта, чтобы определить целевую аудиторию для получения заявок только заинтересованных потребителей'
                        },
                        {
                            back: slide,
                            header: 'eee',
                            title: 'Продвинутая аналитика',
                            text: 'Подберем и проанализируем информацию для проекта, чтобы определить целевую аудиторию для получения заявок только заинтересованных потребителей'
                        },
                        {
                            back: slide,
                            header: 'huhihi',
                            title: 'Продвинутая аналитика',
                            text: 'Подберем и проанализируем информацию для проекта, чтобы определить целевую аудиторию для получения заявок только заинтересованных потребителей'
                        }, {
                            back: slide,
                            header: 'huhihi',
                            title: 'Продвинутая аналитика',
                            text: 'Подберем и проанализируем информацию для проекта, чтобы определить целевую аудиторию для получения заявок только заинтересованных потребителей'
                        }
                    ]}
                />
            }
            staff={<Staff getItems={'staff'}/>}
            guarantees={<Guarantees link={''}/>}
            priceList={<PriceList getItems={'info'}/>}
            subscribe={<Subscribe/>}
            reviews={<Reviews getReviews/>}
            contactUs={
                <div id={'contact'}>
                    <ContactUs/>
                </div>
            }
            footer={<Footer/>}

        >

        </Index>
    )

};
export default LandingPage
