import React from "react"
import './styles.css'
import Container from "../../atoms/Container"
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

interface DefaultTemplateProps {
    breadcrumbs: JSX.Element
}

const DefaultTemplate: React.FC<DefaultTemplateProps> =
    ({breadcrumbs, children}) => {
        return (
            <React.Fragment>
                <Header scrollTo={111}/>
                <main className="main">
                    <Container>
                        {breadcrumbs}
                        {children}
                    </Container>
                </main>
                <Footer/>
            </React.Fragment>

        )

    };
export default DefaultTemplate
