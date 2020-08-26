import React from "react"

import './style.css'

import Copyrights from "../../atoms/Copyrights";
import Nav from "../../molecules/Nav";
import Container from "../../atoms/Container";
import Socials from "../../molecules/Socials";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <Container className={'footer__container'}>
                <Copyrights/>
                <Nav
                    className={'footer__nav'}
                    navArr={
                        [
                            {
                                title: 'Портфолио',
                                link: '#'
                            },
                            {
                                title: 'Услуги',
                                link: '#'
                            },
                            {
                                title: 'Блог',
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
