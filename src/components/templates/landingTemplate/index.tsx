import * as React from "react";
import Container from "../../atoms/container";

interface LandingTemplateProps {
    header: JSX.Element,
    footer: JSX.Element,
    headline?: JSX.Element,
    projects?: JSX.Element,
    seoSlider?: JSX.Element,
    subscribe?: JSX.Element,
    reviews?: JSX.Element,
    contactUs?: JSX.Element

}

const Index: React.FC<LandingTemplateProps> = ({header, footer, children, headline, projects, seoSlider, subscribe, reviews, contactUs}) => {
    return (
        <React.Fragment>
            {header}
            <main>
                {headline}
                <Container>
                    {
                        projects
                    }
                </Container>
                {seoSlider}
                <Container>
                    {children}
                </Container>
                {subscribe}
                <Container>
                    {reviews}
                    {contactUs}
                </Container>
            </main>
            {footer}
        </React.Fragment>
    )

};
export default Index