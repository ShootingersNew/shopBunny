import React from "react";
import Index from "../../templates/landingTemplate";
import Header from "../../organisms/header";
import Headline from "../../organisms/headline";

const Landing = () => {
    return (
        <Index
            header={<Header/>}
            footer={<footer>eee</footer>}
            headline={
                <Headline/>
            }
        >

        </Index>
    )

};
export default Landing
