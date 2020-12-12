import React from "react"
//comps
import ScrollLink from "../ScrollLink"
import TelephoneLink from "../../atoms/TelephoneLink"
//styles
import './style.css'
import st from './../../atoms/montserratBold/style.module.css'

const ContactNav: React.FC<{ telephone: string, scrollTo: string }> = ({telephone, scrollTo}) => {

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
