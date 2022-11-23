import { useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { cloudFunctions } from '../../firebase/config'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import Loader from '../Loader/Loader'
import InputField from './InputField'
import PhoneInputField from './PhoneInputField'
import Dropdown from '../Dropdown/Dropdown'
import {
    Container,
    TopLogo,
    Logo,
    Title,
    FormEl,
    FormFooter,
    FooterIconsContainer,
    FooterIconContainer,
    FooterIcon,
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
    FormHeader,
    Question,
    DatePicker,
    AdditionlContainer,
    AddTitle,
    Bg,
    GeneralError,
    SelectLabel,
    CalendarButton,
    CalendarContainer,
    CalendarBox,
} from './Elements'
import SelectInputField from './SelectInputField'
import Calendar from '../Calendar/Calendar'
import Popup from '../Popup/Popup'

const FormInscription = ({ data, contactData, logo, bg }) => {

    const sendEmail = httpsCallable(cloudFunctions, 'sendInscriptionEmail')
    const { t, i18n } = useTranslation('inscription_form')
    const [disabledButton, setDisabledButton] = useState(false)
    const [phone, setPhone] = useState({ phone: 'no' })
    const [pack, setPack] = useState(t('trip'))
    const [bus, setBus] = useState(t('bus-tour'))
    const [room, setRoom] = useState(t('single'))
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [renderer, setRenderer] = useState(false)
    const [enableSecondPerson, setEnableSecondPerson] = useState(false)
    const [enableThirdPerson, setEnableThirdPerson] = useState(false)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [openSecondCalendar, setOpenSecondCalendar] = useState(false)
    const [openThirdCalendar, setOpenThirdCalendar] = useState(false)
    const [birthDate, setBirthDate] = useState(t('calendar-placeholder'))
    const [birthDateOne, setBirthDateOne] = useState(t('calendar-placeholder'))
    const [birthDateTwo, setBirthDateTwo] = useState(t('calendar-placeholder'))
    const [pop, setPop] = useState(false)

    const packOptions = [t('trip'), t('expo'), t('both')]
    const busOptions = [t('bus-tour'), t('bus-exhibition'), t('bus-all'), t('bus-none')]
    const roomOptions = [t('single'), t('double'), t('triple')]

    const placeholderName = t('name')
    const placeholderSurname = t('surname')
    const placeholderEmail = t('email')
    const placeholderPhone = '+54 11 5 123456'
    const placeholderPassport = t('passport')
    const placeholderMsj = t('answer')
    const placeholderResidence = t('residence')
    const generalError = 'x'
    const minGeneralError = 'Mínimo 2 caracteres'
    const maxGeneralError = 'Max 25 caracteres'
    const emailError = 'Debe ser un correo válido'

    const sentMsj = t('sent-message')
    const errorMsj = t('error-message')

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            passport: '',
            residence: '',
            phone: '',
            questionA: '',
            questionB: '',
            questionC: '',
            questionD: '',
            additionalOneName: '',
            additionalOneSurname: '',
            additionalOnePassport: '',
            additionalOneResidence: '',
            additionalTwoName: '',
            additionalTwoSurname: '',
            additionalTwoPassport: '',
            additionalTwoResidence: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(generalError).min(2, minGeneralError).max(20, maxGeneralError),
            surname: Yup.string().required(generalError).min(2, minGeneralError).max(20, maxGeneralError),
            email: Yup.string().email(emailError).required(generalError),
            passport: Yup.string().required(generalError).min(2, minGeneralError).max(30, maxGeneralError),
            residence: Yup.string().required(generalError).min(2, minGeneralError).max(100, maxGeneralError),
            questionA: Yup.string().required(generalError).min(2, minGeneralError).max(50, maxGeneralError),
            questionB: Yup.string().required(generalError).min(2, minGeneralError).max(50, maxGeneralError),
            questionC: Yup.string().required(generalError).min(2, minGeneralError).max(50, maxGeneralError),
            questionD: Yup.string().required(generalError).min(2, minGeneralError).max(50, maxGeneralError),
            additionalOneName: Yup.string().min(2, minGeneralError).max(20, maxGeneralError),
            additionalOneSurname: Yup.string().min(2, minGeneralError).max(20, maxGeneralError),
            additionalOnePassport: Yup.string().min(2, minGeneralError).max(30, maxGeneralError),
            additionalOneResidence: Yup.string().min(2, minGeneralError).max(100, maxGeneralError),
            additionalTwoName: Yup.string().min(2, minGeneralError).max(20, maxGeneralError),
            additionalTwoSurname: Yup.string().min(2, minGeneralError).max(20, maxGeneralError),
            additionalTwoPassport: Yup.string().min(2, minGeneralError).max(30, maxGeneralError),
            additionalTwoResidence: Yup.string().min(2, minGeneralError).max(100, maxGeneralError),
        }),
        onSubmit: (values, { resetForm }) => {

            // FORMAT INFO
            const data = {
                ...values,
                phone: phone.phone,
                pack: pack,
                room: room,
                bus: bus,
                enableSecondPerson: enableSecondPerson,
                enableThirdPerson: enableThirdPerson,
                birthDate: birthDate,
                birthDateOne: birthDateOne,
                birthDateTwo: birthDateTwo,
            }

            setDisabledButton(true)

            sendEmail(data)
                .then(res => {
                    setSent(true)
                    setPop(true)
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

    const handleCalendar = () => {
        setOpenCalendar(!openCalendar)
    }

    const getButtonContent = () => {

        if (!disabledButton) return t('send')
        if (sent) return t('sent')
        if (error) return 'Error'
        return <Loader />
    }

    return (
        <>
            <Bg bg={bg.src} />
            <Container>
                <FormHeader>
                    <TopLogo><Logo src={logo.src} alt={logo.alt} /></TopLogo>
                    <Dropdown i18n={i18n} setRenderer={setRenderer} renderer={renderer} />
                </FormHeader>
                <Title>{t("text")}</Title>
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
                        id="surname"
                        name="surname"
                        type="text"
                        value={formik.values.surname}
                        event={formik.handleChange}
                        placeholder={placeholderSurname}
                        touched={formik.touched}
                        error={formik.errors.surname}
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
                    <InputField
                        id="passport"
                        name="passport"
                        type="text"
                        value={formik.values.passport}
                        event={formik.handleChange}
                        placeholder={placeholderPassport}
                        touched={formik.touched}
                        error={formik.errors.passport}
                    />
                    <InputField
                        id="residence"
                        name="residence"
                        type="text"
                        value={formik.values.residence}
                        event={formik.handleChange}
                        placeholder={placeholderResidence}
                        touched={formik.touched}
                        error={formik.errors.residence}
                    />
                    <SelectLabel>{t('birth-date')}</SelectLabel>
                    <CalendarContainer>
                        <CalendarButton
                            type="button"
                            onClick={handleCalendar}
                        >
                            {birthDate}
                        </CalendarButton>
                        {
                            openCalendar &&
                            <CalendarBox>
                                <Calendar
                                    selectedDay={birthDate}
                                    setSelectedDay={setBirthDate}
                                    openCalendar={openCalendar}
                                    setOpenCalendar={setOpenCalendar}
                                />
                            </CalendarBox>
                        }
                    </CalendarContainer>
                    <SelectLabel>{t('phone')}</SelectLabel>
                    <PhoneInputField
                        id="phone"
                        name="phone"
                        setPhone={setPhone}
                        placeholder={placeholderPhone}
                        msj=''
                    />
                    <SelectInputField
                        t={t}
                        options={packOptions}
                        setter={setPack}
                        label={t('pack')}
                        renderer={renderer}
                    />
                    <SelectInputField
                        t={t}
                        options={busOptions}
                        setter={setBus}
                        label={t('bus')}
                        renderer={renderer}
                    />
                    <SelectInputField
                        t={t}
                        options={roomOptions}
                        setter={setRoom}
                        label={t('room')}
                        renderer={renderer}
                        setEnableSecondPerson={setEnableSecondPerson}
                        setEnableThirdPerson={setEnableThirdPerson}
                    />
                    {
                        (enableSecondPerson || enableThirdPerson) &&
                        <AdditionlContainer enablePerson={enableSecondPerson}>
                            <AddTitle>{t('additional-person')} 1</AddTitle>
                            <InputField
                                id="additionalOneName"
                                name="additionalOneName"
                                type="text"
                                value={formik.values.additionalOneName}
                                event={formik.handleChange}
                                placeholder={placeholderName}
                                touched={formik.touched}
                                error={formik.errors.additionalOneName}
                            />
                            <InputField
                                id="additionalOneSurname"
                                name="additionalOneSurname"
                                type="text"
                                value={formik.values.additionalOneSurname}
                                event={formik.handleChange}
                                placeholder={placeholderSurname}
                                touched={formik.touched}
                                error={formik.errors.additionalOneSurname}
                            />
                            <InputField
                                id="additionalOnePassport"
                                name="additionalOnePassport"
                                type="text"
                                value={formik.values.additionalOnePassport}
                                event={formik.handleChange}
                                placeholder={placeholderPassport}
                                touched={formik.touched}
                                error={formik.errors.additionalOnePassport}
                            />
                            <InputField
                                id="additionalOneResidence"
                                name="additionalOneResidence"
                                type="text"
                                value={formik.values.additionalOneResidence}
                                event={formik.handleChange}
                                placeholder={placeholderResidence}
                                touched={formik.touched}
                                error={formik.errors.additionalOneResidence}
                            />
                            <SelectLabel>{t('birth-date')}</SelectLabel>
                            <CalendarContainer>
                                <CalendarButton
                                    type="button"
                                    onClick={() => setOpenSecondCalendar(!openSecondCalendar)}
                                >
                                    {birthDateOne}
                                </CalendarButton>
                                {
                                    openSecondCalendar &&
                                    <CalendarBox>
                                        <Calendar
                                            selectedDay={birthDateOne}
                                            setSelectedDay={setBirthDateOne}
                                            openCalendar={openSecondCalendar}
                                            setOpenCalendar={setOpenSecondCalendar}
                                        />
                                    </CalendarBox>
                                }
                            </CalendarContainer>
                        </AdditionlContainer>
                    }

                    {
                        enableThirdPerson &&
                        <AdditionlContainer enablePerson={enableThirdPerson}>
                            <AddTitle>{t('additional-person')} 2</AddTitle>
                            <InputField
                                id="additionalTwoName"
                                name="additionalTwoName"
                                type="text"
                                value={formik.values.additionalTwoName}
                                event={formik.handleChange}
                                placeholder={placeholderName}
                                touched={formik.touched}
                                error={formik.errors.additionalTwoName}
                            />
                            <InputField
                                id="additionalTwoSurname"
                                name="additionalTwoSurname"
                                type="text"
                                value={formik.values.additionalTwoSurname}
                                event={formik.handleChange}
                                placeholder={placeholderSurname}
                                touched={formik.touched}
                                error={formik.errors.additionalTwoSurname}
                            />
                            <InputField
                                id="additionalTwoPassport"
                                name="additionalTwoPassport"
                                type="text"
                                value={formik.values.additionalTwoPassport}
                                event={formik.handleChange}
                                placeholder={placeholderPassport}
                                touched={formik.touched}
                                error={formik.errors.additionalTwoPassport}
                            />
                            <InputField
                                id="additionalTwoResidence"
                                name="additionalTwoResidence"
                                value={formik.values.additionalTwoResidence}
                                event={formik.handleChange}
                                placeholder={placeholderResidence}
                                touched={formik.touched}
                                error={formik.errors.additionalTwoResidence}
                            />
                            <SelectLabel>{t('birth-date')}</SelectLabel>
                            <CalendarContainer>
                                <CalendarButton
                                    type="button"
                                    onClick={() => setOpenThirdCalendar(!openThirdCalendar)}
                                >
                                    {birthDateTwo}
                                </CalendarButton>
                                {
                                    openThirdCalendar &&
                                    <CalendarBox>
                                        <Calendar
                                            selectedDay={birthDateTwo}
                                            setSelectedDay={setBirthDateTwo}
                                            openCalendar={openThirdCalendar}
                                            setOpenCalendar={setOpenThirdCalendar}
                                        />
                                    </CalendarBox>
                                }
                            </CalendarContainer>
                        </AdditionlContainer>
                    }
                    <TextAreaContainer>
                        <Question>{t('question-one')}</Question>
                        <TextArea
                            id="questionA"
                            name="questionA"
                            rows="1"
                            value={formik.values.questionA}
                            onChange={formik.handleChange}
                            placeholder={placeholderMsj}
                            touched={formik.touched}
                            error={formik.errors.questionA}
                        />
                        {formik.errors.questionA && formik.touched.questionA && <Error>{formik.errors.questionA}</Error>}
                    </TextAreaContainer>
                    <TextAreaContainer>
                        <Question>{t('question-two')}</Question>
                        <TextArea
                            id="questionB"
                            name="questionB"
                            rows="1"
                            value={formik.values.questionB}
                            onChange={formik.handleChange}
                            placeholder={placeholderMsj}
                            touched={formik.touched}
                            error={formik.errors.questionB}
                        />
                        {formik.errors.questionB && formik.touched.questionB && <Error>{formik.errors.questionB}</Error>}
                    </TextAreaContainer>
                    <TextAreaContainer>
                        <Question>{t('question-three')}</Question>
                        <TextArea
                            id="questionC"
                            name="questionC"
                            rows="1"
                            value={formik.values.questionC}
                            onChange={formik.handleChange}
                            placeholder={placeholderMsj}
                            touched={formik.touched}
                            error={formik.errors.questionC}
                        />
                        {formik.errors.questionC && formik.touched.questionC && <Error>{formik.errors.questionC}</Error>}
                    </TextAreaContainer>
                    <TextAreaContainer>
                        <Question>{t('question-four')}</Question>
                        <TextArea
                            id="questionD"
                            name="questionD"
                            rows="1"
                            value={formik.values.questionD}
                            onChange={formik.handleChange}
                            placeholder={placeholderMsj}
                            touched={formik.touched}
                            error={formik.errors.questionD}
                        />
                        {formik.errors.questionD && formik.touched.questionD && <Error>{formik.errors.questionD}</Error>}
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
                <SubTitle>Datos de contacto</SubTitle>
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
                </ContactDetailsContainer>
                <FormFooter>
                    <FooterIconsContainer>
                        {
                            data.map(item => {
                                return (
                                    <FooterIconContainer key={item}>
                                        <FooterIcon src={item} />
                                    </FooterIconContainer>
                                )
                            })
                        }
                    </FooterIconsContainer>
                </FormFooter>
            </Container>
        </>
    )
}

export default FormInscription