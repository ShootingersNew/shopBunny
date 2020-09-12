import React from "react"
import './styles.css'
import Container from "../../atoms/Container"

interface DefaultTemplateProps {
    header: JSX.Element,
    footer: JSX.Element,
    breadcrumbs: JSX.Element
}

const DefaultTemplate: React.FC<DefaultTemplateProps> =
    ({header, footer, breadcrumbs, children}) => {
        return (
            <React.Fragment>
                {header}
                <main className="main">
                    <Container>
                        {breadcrumbs}
                        {children}
                    </Container>
                </main>
                {footer}
            </React.Fragment>

        )

    };
export default DefaultTemplate
