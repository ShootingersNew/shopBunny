import React from "react"
//comps
import Copyrights from "../../atoms/Copyrights"
import Nav from "../../molecules/Nav"
import Container from "../../atoms/Container"
import Socials from "../../molecules/Socials"
//styles
import './style.css'

// import {NavArrItemType} from "../../../tsTypes"

const Footer: React.FC = () => {
    return (
        <footer className={'footer'}>
            <Container className={'footer__container'}>
                <Copyrights/>
                <Nav
                    className={'footer__nav'}
                    navArr={
                        [
                            {
                                title: 'Публичный договор',
                                link: '#'
                            },
                            {
                                title: 'Платежная информация',
                                link: '#'
                            },
                            {
                                title: 'Вакансии',
                                link: '#'
                            }
                        ]
                    }
                />
                <Socials className={'footer__socials'}
                         arr={[{name: 'youtube', link: '#'}, {name: 'vk', link: '#'}]}/></Container>
        </footer>
    )
};

export default Footer
