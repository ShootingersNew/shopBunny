import React from "react"
//comps
import Container from "../../atoms/Container";
import Logo from "../../atoms/Logo";
import Nav from "../../molecules/Nav";
import ContactNav from "../../molecules/ContactNav";
import Button from "../../atoms/Button";
import svg from './img/Back.svg'
import {useRouteMatch} from 'react-router-dom'
//styles
import './style.css'


const Header: React.FC<{ scrollTo: number | undefined }> = ({scrollTo}) => {
    const isExact = useRouteMatch().isExact;
    return (
        <header className={'header'}>
            <Container className={'header__container'}>
                {
                    !isExact && <Button className={'header__back-button'}><img src={svg} alt="назад"/></Button>
                }
                <Logo
                    text={'Bunny studio'}
                    img={''}
                    className={'header__logo'}
                />
                <Nav
                    className={'header__nav'}
                    navArr={
                        [
                            {
                                title: 'Портфолио',
                                link: '/portfolio'
                            },
                            {
                                title: 'Услуги',
                                link: '#'
                            },
                            {
                                title: 'Блог',
                                link: '/blog'
                            }
                        ]
                    }
                />
                <ContactNav
                    telephone={'8 961 053 33 62'}
                    scrollTo={scrollTo}
                />
            </Container>
        </header>
    )
};
export default Header
