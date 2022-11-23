import { useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { cloudFunctions } from '../../firebase/config'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import Loader from '../Loader/Loader'
import InputField from './InputField'
import PhoneInputField from './PhoneInputField'
import Popup from '../Popup/Popup'
import {
    FormEl,
    ButtonContainer,
    SendButton,
    TextAreaContainer,
    TextArea,
    Error,
    SubTitle,
    ContactDetailsContainer,
    ContactDetail,
    Anchor,
    Icon,
    ContactText,
    GeneralError,
    LandingForm,
    LandingTitle,
} from './Elements'
import { SmallLogo, SmallLogoContainer } from '../Contact/Elements'

const FormLanding = ({ contactData, logo }) => {

    const { t } = useTranslation('contact_form')
    const sendEmail = httpsCallable(cloudFunctions, 'sendEmail')
    const [disabledButton, setDisabledButton] = useState(false)
    const [phone, setPhone] = useState({ phone: 'no' })
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [pop, setPop] = useState(false)

    const placeholderName = t('name')
    const placeholderEmail = t('email')
    const placeholderPhone = '+54 11 5 123456'
    const placeholderMsj = t('msj')
    const optionalMsj = t('optional')
    const generalError = 'x'
    const minGeneralError = 'Mínimo 2 caracteres'
    const maxGeneralError = 'Max 25 caracteres'
    const emailError = 'Debe ser un correo válido'

    const errorMsj = t('error-message')
    const sentMsj = t('sent-message')

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            msj: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(generalError).min(2, minGeneralError).max(20, maxGeneralError),
            email: Yup.string().email(emailError).required(generalError),
            msj: Yup.string().required(generalError).min(2, minGeneralError).max(120, maxGeneralError)
        }),
        onSubmit: (values, { resetForm }) => {

            // SEND MAIL
            const data = {
                ...values,
                phone: phone
            }

            setDisabledButton(true)

            sendEmail(data)
                .then(res => {
                    setPop(true)
                    setSent(true)
                })
                .catch(err => {
                    console.log(err)
                    setError(true)
                })
                .finally(() => {

                    resetForm()

                    setTimeout(() => {
                        setSent(false)
                        setError(false)
                        setPop(false)
                        setDisabledButton(false)
                    }, 4000)
                })
        }
    })

    const getButtonContent = () => {

        if (!disabledButton) return t('send')
        if (sent) return t('sent')
        if (error) return 'Error'
        return <Loader />
    }

    return (
        <LandingForm>
            <LandingTitle>{t('title')}</LandingTitle>
            <FormEl onSubmit={formik.handleSubmit}>
                <InputField
                    id="name"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    event={formik.handleChange}
                    placeholder={placeholderName}
                    touched={formik.touched}
                    error={formik.errors.name}
                />
                <InputField
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    event={formik.handleChange}
                    placeholder={placeholderEmail}
                    touched={formik.touched}
                    error={formik.errors.email}
                />
                <PhoneInputField
                    id="phone"
                    name="phone"
                    setPhone={setPhone}
                    placeholder={placeholderPhone}
                    msj={optionalMsj}
                />
                <TextAreaContainer>
                    <TextArea
                        id="msj"
                        name="msj"
                        rows="3"
                        value={formik.values.msj}
                        onChange={formik.handleChange}
                        placeholder={placeholderMsj}
                        touched={formik.touched}
                        error={formik.errors.msj}
                    />
                    {formik.errors.msj && formik.touched.msj && <Error>{formik.errors.msj}</Error>}
                </TextAreaContainer>
                <ButtonContainer>
                    <SendButton type="submit" disabled={disabledButton} sent={sent} error={error}>
                        {getButtonContent()}
                    </SendButton>
                </ButtonContainer>
                {
                    Object.entries(formik.errors).length !== 0 &&
                    <GeneralError>{t('general-error')}</GeneralError>
                }
            </FormEl>
            {
                pop && <Popup msj={error ? errorMsj : sentMsj} />
            }
            <SubTitle>{t('contact')}</SubTitle>
            <ContactDetailsContainer>
                {
                    contactData.map(item => {
                        return (
                            <ContactDetail key={item.text}>
                                {
                                    item.a ?
                                        <Anchor
                                            href="https://wa.me/5491151062096"
                                            class="whatsapp_float"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon src={item.icon} alt={item.alt} />
                                            <ContactText>{item.text}</ContactText>
                                        </Anchor> :
                                        <>
                                            <Icon src={item.icon} alt={item.alt} />
                                            <ContactText>{item.text}</ContactText>
                                        </>
                                }
                            </ContactDetail>
                        )
                    })
                }
                <SmallLogoContainer>
                    <SmallLogo src={logo} />
                </SmallLogoContainer>
            </ContactDetailsContainer>
        </LandingForm>
    )
}

export default FormLanding