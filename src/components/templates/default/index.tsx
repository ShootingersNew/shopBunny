import React from "react";

interface DefaultTemplateProps {
    header: JSX.Element,
    footer: JSX.Element,
    children: JSX.Element | string;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({header, footer, children}) => {
    return (
        <React.Fragment>
            {header}
            <main>{children}</main>
            {footer}
        </React.Fragment>
    )

};
export default DefaultTemplate
