import React from "react";

interface LandingTemplateProps {
    header: JSX.Element,
    footer: JSX.Element,
}

const LandingTemplate: React.FC<LandingTemplateProps> = ({header, footer, children}) => {
    return (
        <React.Fragment>
            {header}
            <main>
                {
                    children
                }
            </main>
            {footer}
        </React.Fragment>
    )

};
export default LandingTemplate
