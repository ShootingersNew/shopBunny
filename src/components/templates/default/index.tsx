import React from "react"
import './styles.css'
import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import {MobileFooterPropTypes} from "../../molecules/MobileFooter";

interface DefaultTemplateProps extends MobileFooterPropTypes {
}

const DefaultTemplate: React.FC<DefaultTemplateProps> =
    ({children, button, isActive}) => {
        return (
            <React.Fragment>
                <Header scrollTo={''}/>
                <main className="main main_default">
                    {children}
                </main>
                <Footer button={button} isActive={isActive}/>
            </React.Fragment>
        )

    };
export default DefaultTemplate
