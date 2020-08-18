import React, {useEffect, useRef, useState} from "react"
//comps
import Index from "../../templates/LandingTemplate"
import Header from "../../organisms/Header"
import Headline from "../../organisms/Headline"
import Projects from "../../organisms/Projects";
import SlickSlider from "../../molecules/Slick";
import PriceList from "../../organisms/PriceList";
import slide from './img/slid.jpg'
//styles
import back from './img/back.jpg'
import Staff from "../../organisms/Staff";
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
            header={<Header scrollTo={scrollRefs.projects}/>}
            footer={<footer>eee</footer>}
            headline={
                <Headline img={back} linkTo={scrollRefs.projects}/>
            }
            projects={
                <div ref={projectsRef}>
                    <Projects/>
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
            staff={<Staff/>}
            priceList={<PriceList scrollTo={scrollRefs.projects}/>}

        >

        </Index>
    )

};
export default LandingPage
