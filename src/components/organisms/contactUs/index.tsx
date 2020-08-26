import React from "react"
import InputMask from 'react-input-mask'
//comps
import Subheader from "../../molecules/Subheader"
import Form from "../../atoms/Form/Form"
import Input from "../../atoms/Input"
import Heading from "../../atoms/Heading"
//styles
import fm from "../../atoms/montserratMedium/style.module.css"
import fb from "../../atoms/montserratBold/style.module.css"
import './style.css'
import {mask} from "../../_settings/_config"
import Button from "../../atoms/Button";

const ContactUs: React.FC = () => {
    return (
        <section className={'contactUs'}>
            <Subheader className={'contactUs__header'}>
                Свяжитесь с нами
            </Subheader>
            <div className="contactUs__content">
                <div
                    className="contactUs__preview"
                    style={{backgroundImage: `url('${process.env.REACT_APP_IMAGES_PATH}/form.png')`}}
                />
                <div className="contactUs__formLayout">
                    <Form
                        submitHandler={() => {
                            console.log('eee boii')
                        }}
                        className={'contactUs__form'}
                        children={
                            ({register, formState, control}, isValidInput, Controller) => (
                                <React.Fragment>
                                    <Heading className={'contactUs__formSubheader'} type={3}>Опишите свои бизнес-задачи
                                        и мы
                                        предложим решения</Heading>
                                    <Input
                                        name={'name'}
                                        className={'contactUs__input contactUs__name ' + fm.fontMontserratMedium}
                                        placeholder={'Имя'}
                                        isValid={isValidInput ? isValidInput('name') : undefined}
                                        register={register({
                                            required: true,
                                            minLength: 2
                                        })}
                                    />
                                    <Controller
                                        as={InputMask}
                                        control={control}
                                        type={'text'}
                                        name={'phone'}
                                        placeholder={'Введите номер телефона'}
                                        className={' input contactUs__input contactUs__name input_isValid_' + isValidInput('phone') + ' ' + fm.fontMontserratMedium}
                                        mask={mask} maskChar="_"
                                        defaultValue={''}
                                        rules={{
                                            validate: (value: string) => {
                                                const numbersInMask = mask.length - mask.replace(/\d/gm, '').length;
                                                const numbersInVal = value.length - value.replace(/\d/gm, '').length;
                                                return numbersInMask === numbersInVal;
                                            }
                                        }}
                                    />
                                    <Input
                                        name={'tasks'}
                                        type={'textarea'}
                                        className={'contactUs__input contactUs__tasks ' + fm.fontMontserratMedium}
                                        placeholder={'Опишите бизнес-задачи'}
                                        isValid={isValidInput ? isValidInput('tasks') : undefined}
                                        register={register({
                                            required: true,
                                            minLength: 5
                                        })}
                                    />
                                    <Button
                                        mod={'isValid_' + formState.isValid}
                                        className={'contactUs__button'}
                                        disabled={!formState.isValid}
                                    >Узнать решение</Button>
                                    <div className={'contactUs__agreement'}>
                                        Я даю согласие на обработку
                                        персональных данных
                                    </div>
                                </React.Fragment>
                            )
                        }/>
                    <div className="contactUs__footer">
                        <div className={"contactUs__footerHeader " + fb.montserratBold}> Или свяжитесь с нами
                            самостоятельно
                        </div>
                        <span className="contactUs__telephoneNumber">8 961 053 33 62</span>
                        <span className="contactUs__mail">bunny@studio.com</span>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default ContactUs