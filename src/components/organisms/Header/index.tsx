import React from "react"
//comps
import Container from "../../atoms/Container";
import Logo from "../../atoms/Logo";
import TopNav from "../../molecules/TopNav";
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
                <TopNav
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
                <ContactNav
                    telephone={'8 961 053 33 62'}
                    scrollTo={scrollTo}
                />
            </Container>
        </header>
    )
};
export default Header
