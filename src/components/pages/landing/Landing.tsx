import React from "react";
import LandingTemplate from "../../templates/landingTemplate/LandingTemplate";
import Header from "../../organisms/header/Header";

const Landing = () => {
    return (
        <LandingTemplate
            header={<Header/>}
            footer={<footer>eee</footer>}
        >
            <main>
                main
            </main>
        </LandingTemplate>
    )

};
export default Landing
