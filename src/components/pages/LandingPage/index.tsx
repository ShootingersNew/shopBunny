import React, {useEffect, useRef, useState} from "react"
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
//types
type ScrollRefsTypes = {
    projects: number | undefined
};

const LandingPage = () => {
    //initialize state for store offsetTop of scroll-wrappers
    const [scrollRefs, setScrollRefs] = useState<ScrollRefsTypes>({projects: undefined});
    const projectsRef = useRef<HTMLDivElement>(null);
    const useMountEffect = (fun: () => void) => useEffect(fun, []);
    const initRefs = (): void => {
        const projectsOffset: number | undefined = projectsRef.current?.offsetTop;
        setScrollRefs({...scrollRefs, projects: projectsOffset})
    };
    useMountEffect(initRefs);
    return (
        <Index
            header={
                <Header
                    scrollTo={scrollRefs.projects}
                />
            }
            headline={
                <Headline img={back} linkTo={scrollRefs.projects}/>
            }
            projects={
                <div ref={projectsRef}>
                    <ItemsWithFilter
                        tags={[
                            {"title": "Избранные проекты", "link": "favorite"},
                            {"title": "Многостраничная полиграфия", "link": "poligraph"},
                            {"title": "Печатная продукция", "link": "product"},
                            {"title": "Сложный web-проект", "link": "difficult"},
                            {"title": "Компактный интернет-магазин", "link": "compactShop"},
                            {"title": "Лендинг", "link": "landing"},
                            {"title": "Сайт-визитка", "link": "visitCard"},
                            {"title": "Социальные сети", "link": "socials"},
                            {"title": "Интернет-магазин", "link": "shop"}
                        ]}
                        url={'allProjects'}
                        heading={true}
                    />
                </div>
            }
            seoSlider={
                <SlickSlider slides={[
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
                ]}/>
            }
            staff={<Staff getItems={'staff'}/>}
            guarantees={<Guarantees link={''}/>}
            priceList={<PriceList getItems={'info'} scrollTo={scrollRefs.projects}/>}
            subscribe={<Subscribe/>}
            reviews={<Reviews/>}
            contactUs={<ContactUs/>}
            footer={<Footer/>}

        >

        </Index>
    )

};
export default LandingPage
