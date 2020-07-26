import React from "react";
import ScrollLink from "../scrollLink";
import TelephoneLink from "../../atoms/telephoneLink/telephoneLink";
import './style.css'
import st from './../../atoms/montserratBold/style.module.css'

const ContactNav: React.FC<{ telephone: string, scrollTo: number | undefined }> = ({telephone, scrollTo}) => {
    return (
        <div className={`header__contact-us contactNav ${st.montserratBold}`}>
            <TelephoneLink className={'contactNav__link'}>
                {
                    telephone
                }
            </TelephoneLink>
            <ScrollLink to={scrollTo}>Обсудить проект</ScrollLink>
        </div>
    )
};
export default ContactNav
