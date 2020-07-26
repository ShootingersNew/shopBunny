import React from "react"
//comps
import Container from "../../atoms/container";
import Logo from "../../atoms/logo";
import TopNav from "../../molecules/topNav";
import ContactNav from "../../molecules/contactNav";
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
