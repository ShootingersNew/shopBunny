import React from "react"
//comps
import Container from "../../atoms/Container";
import Logo from "../../atoms/Logo";
import Nav from "../../molecules/Nav";
import ContactNav from "../../molecules/ContactNav";
//styles
import './style.css'


const Header: React.FC<{ scrollTo: number | undefined }> = ({scrollTo}) => {
    return (
        <header className={'header'}>
            <Container className={'header__container'}>
                <Logo
                    text={'Bunny studio'}
                    img={''}
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
