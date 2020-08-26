import React from "react"
//comps
import Subheader from "../../molecules/Subheader"
import Heading from "../../atoms/Heading"
import Button from "../../atoms/Button"
//styles
import './style.css'
import s from '../../atoms/mainColor/style.module.css'
import f from '../../atoms/montserratBold/style.module.css'
import bg from './images/guarantee.png'

type GuaranteesTypes = {};
const Guarantees: React.FC<GuaranteesTypes> = ({}) => {
    return (
        <section className={'guarantees'}>
            <Subheader
                className={'guarantees__header'}
                content={
                    <div className={'guarantees__desc'}>
                        Гарантий конверсии, результата или сделки не существует — их искусственно создают из фиктивных
                        обещаний
                    </div>
                }
            >
                Ценим доверие
            </Subheader>

            <div className="guarantees__content">
                <div className="guarantees__card">
                    <Heading type={3}>Уклончивый
                        договор</Heading>
                    <div className={"guarantees__cardDesc " + f.montserratBold}>
                        Считается исполненным при достижении условий проекта в любой из дней работы проекта
                    </div>
                    <div className={"guarantees__accent " + s.mainColor + ' ' + f.montserratBold}>Зачем вам фиктивный
                        результат?
                    </div>
                </div>
                <div className="guarantees__card">
                    <Heading type={3}>Искусственные заявки</Heading>
                    <div className="guarantees__cardDesc guarantees__cardDesc_large">
                        Разработчики проекта лично создают поддельные заявки, чтобы условия догвоора считались
                        выполненными
                    </div>
                    <div className={"guarantees__accent " + s.mainColor + ' ' + f.montserratBold}>Зачем вам подставные
                        заявки?
                    </div>
                </div>
                <div className={"guarantees__banner"} style={{backgroundImage: `url(${bg})`}}>
                    <div className={"guarantees__bannerText " + f.montserratBold}>
                        Узнайте правду о гарантиях результата
                    </div>

                    <Button link={''} className={'guarantees__button'} type={'link'}>Читать</Button>
                </div>
            </div>
        </section>
    )
};

export default Guarantees
