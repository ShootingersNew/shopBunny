import React from "react"
import './styles.css'
import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"

interface DefaultTemplateProps {

}

const DefaultTemplate: React.FC<DefaultTemplateProps> =
    ({children}) => {
        return (
            <React.Fragment>
                <Header scrollTo={111}/>
                <main className="main">
                    {children}

                </main>
                <Footer/>
            </React.Fragment>

        )

    };
export default DefaultTemplate
