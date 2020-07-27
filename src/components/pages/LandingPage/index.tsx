import React, {useEffect, useRef, useState} from "react"
//comps
import Index from "../../templates/LandingTemplate"
import Header from "../../organisms/Header"
import Headline from "../../organisms/Headline"
import Projects from "../../organisms/Projects";
//styles
import back from './img/back.jpg'
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
            projects={<Projects/>}
        >
            <div ref={projectsRef} id="anchor" className="element">
                test 6 (anchor)
            </div>
        </Index>
    )

};
export default LandingPage
