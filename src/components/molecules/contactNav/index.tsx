import React from "react";
import TelephoneLink from "../../atoms/telephoneLink/telephoneLink";
import './style.css'
import st from './../../atoms/montserratBold/style.module.css'

const ContactNav: React.FC<{ telephone: string }> = ({telephone}) => {
    return (
        <div className={`header__contact-us contactNav ${st.montserratBold}`}>
            <TelephoneLink className={'contactNav__link'}>
                {
                    telephone
                }
            </TelephoneLink>
            <a href="" className={`contactNav__to-form`}>Обсудить проект</a>
        </div>
    )
};
export default ContactNav
