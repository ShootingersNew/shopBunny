import React from "react"
//comps
import Copyrights from "../../atoms/Copyrights"
import Nav from "../../molecules/Nav"
import Container from "../../atoms/Container"
import Socials from "../../molecules/Socials"
import {isMobileOnly} from "react-device-detect";
//styles
import './style.css'
import MobileFooter, {MobileFooterPropTypes} from "../../molecules/MobileFooter";
import {useIframeRes} from "../../_settings/_utils";

interface FooterPropType extends MobileFooterPropTypes {
    isDesk?: boolean,
    isWithoutCopyrights?: boolean,
    className?: string,
}

const Footer: React.FC<FooterPropType> = ({isDesk, isWithoutCopyrights, className, button, isActive}) => {
    const res = useIframeRes();
    return (
        <>
            {
                (isMobileOnly || res === 'mobile') && !isDesk ?
                    <MobileFooter isActive={isActive} button={button}/>
                    :
                    <footer className={'footer'}>
                        <Container className={'footer__container'}>
                            {!isWithoutCopyrights && <Copyrights/>}
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
                            <Socials
                                className={'footer__socials'}
                                arr={[{name: 'youtube', link: '#'}, {name: 'vk', link: '#'}]}
                            />
                        </Container>
                    </footer>
            }
        </>
    )
};

export default Footer
