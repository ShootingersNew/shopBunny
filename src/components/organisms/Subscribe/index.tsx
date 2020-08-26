import React from "react"
//comps
import Container from "../../atoms/Container"
import Form from "../../atoms/Form/Form"
import Index from "../../atoms/Input"
import Button from "../../atoms/Button"
//styles
import f from '../../atoms/montserratBlack/style.module.css'
import fm from '../../atoms/montserratMedium/style.module.css'
import './style.css'
//config
import {emailRegexp} from "../../_settings/_config"

const Subscribe = () => {
    return (
        <section className={'subscribe'}
                 style={{backgroundImage: `url('${process.env.REACT_APP_IMAGES_PATH}/banner.png')`}}>
            <Container className={'subscribe__container'}>
                <span
                    className={"subscribe__text " + f.fontMontserratBlack}>Приведи друга и получи 5% с его заказа</span>
                <Form
                    submitHandler={(data) => {
                        console.log(data)
                    }}
                    children={
                        ({register}, isValidInput) => (
                            <React.Fragment>
                                <Index
                                    name={'mail'}
                                    className={'subscribe__input ' + fm.fontMontserratMedium}
                                    placeholder={'E-mail'}
                                    isValid={isValidInput ? isValidInput('mail') : undefined}
                                    register={register({
                                        pattern: emailRegexp
                                    })}
                                />
                                <Button
                                    className={'subscribe__button ' + fm.fontMontserratMedium}
                                    mod={'accent button_isValid_' + isValidInput('mail')}
                                >
                                    Получить промокод
                                </Button>
                            </React.Fragment>
                        )
                    }
                />
            </Container>
        </section>
    )
};

export default Subscribe
