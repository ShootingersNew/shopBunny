import React, {useEffect, useRef, useState} from "react"
//comps
import Index from "../../templates/landingTemplate"
import Header from "../../organisms/header"
import Headline from "../../organisms/headline"
//styles
import back from './img/back.jpg'
//types
type ScrollRefsTypes = {
    projects: number | undefined
};

const Landing = () => {
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
        >
            <div ref={projectsRef} id="anchor" className="element">
                test 6 (anchor)
            </div>
        </Index>
    )

};
export default Landing
