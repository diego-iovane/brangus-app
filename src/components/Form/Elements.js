import styled from 'styled-components'

const commonWidth = '90%'

//TEMP
export const Bg = styled.div`
    position: fixed;
    padding-bottom: 1rem;
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    background-image: ${({ bg }) => `url(${bg})`};
    background-size: cover;
    background-repeat: no-repeat;
`

export const Container = styled.div`
    position: relative;
    width: 50%;
    padding: 1rem 0;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.16);

    //TEMP
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    /* z-index: 10; */

    @media all and (max-width: 950px) {
        width: 65%;
    }

    @media all and (max-width: 650px) {
        width: 85%;
    }

    @media all and (max-width: 450px) {
        width: 90%;
        margin-top: 1rem;
    }
`

export const FormHeader = styled.div`
    width: ${commonWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 500;
    background: #ffffff;
`

export const TopLogo = styled.div`
    width: 6rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
`

export const Logo = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`

export const Title = styled.h1`
    width: ${commonWidth};
    margin: 0 auto;
    margin-bottom: 1rem;
    font-weight: 400;
    border-bottom: 1px solid var(--lighter-gray);
    padding-bottom: 1rem;
    color: var(--dark-blue);
`

export const Text = styled.p`
    margin: 0 auto;
    margin-bottom: 1rem;
    width: ${commonWidth};
    font-size: 1rem;
`

export const FormEl = styled.form`
    width: ${commonWidth};
    margin: 0 auto;
    margin-bottom: 1.5rem;
`

export const InputContainer = styled.div`
    position: relative;
    margin: 1rem 0;
`

export const Input = styled.input`
    width: 100%;
    border: 1px solid var(--lighter-gray);
    border-radius: 4px;
    padding: .6rem .8rem;
`

export const Error = styled.p`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    color: var(--alert-color);
    font-size: 1rem;
`

export const PhoneContainer = styled.div`
    position: relative;
`

export const PhoneNote = styled.p`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    color: var(--light-gray);
    font-size: .8rem;
`

export const TextAreaContainer = styled.div`
    position: relative;
    margin: 1rem 0;
`

export const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid var(--lighter-gray);
    border-radius: 4px;
    padding: .6rem .8rem;
    resize: none;
`

export const ButtonContainer = styled.div`
    display: flex;
`

export const SendButton = styled.button`
    width: var(--button-width);
    height: var(--button-height);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: var(--button-shadow);
    color: var(--black);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    background-color: 
        ${({ sent, error }) =>
        sent ? 'var(--ok-color)' :
            error ? 'var(--alert-color)' :
                'var(--yellow)'
    };
    transition: all .4s ease-in-out;

    &:hover {
        opacity: ${({ disabled }) => !disabled && '.7'};
    }

    &:disabled {
        cursor: context-menu;
    }
`

export const SubTitle = styled.h3`
    width: ${commonWidth};
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 400;
    border-bottom: 1px solid var(--lighter-gray);
    padding-bottom: 1rem;
    color: var(--dark-blue);
`

export const AddTitle = styled.h3`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 400;
    border-bottom: 1px solid var(--lighter-gray);
    padding-bottom: 1rem;
    color: var(--dark-blue);
`

export const ContactDetailsContainer = styled.div`
    width: ${commonWidth};   
    margin: 2rem auto;
    margin-top: 1rem;
`

export const ContactDetail = styled.div`
    display: flex;
    margin-bottom: .9rem;
    display: flex;
    align-items: center;
`

export const Anchor = styled.a`
    display: flex;
`

export const Icon = styled.img`
    width: 1.7rem;
    height: 1.7rem;
    object-fit: contain;
    margin-right: 1rem;
`

export const ContactText = styled.p`

`

export const FormFooter = styled.div``

export const FooterIconsContainer = styled.div`
    border-top: 1px solid var(--lighter-gray);
    padding-top: 1rem;
    width: ${commonWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FooterIconContainer = styled.div`
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterIcon = styled.img`
    height: auto;
    width: 100%;
`

//REGISTRATION FORM
export const Question = styled.p`
    color: var(--dark-blue);
    margin-bottom: .5rem;
`

export const DatePicker = styled.input`
    margin-bottom: 1rem;
    border: 1px solid var(--lighter-gray);
    border-radius: 4px;
    padding: .6rem .8rem;
    width: 10rem;
    height: 2.5rem;
`

export const SelectContainer = styled.div`
    position: relative;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
`

export const SelectLabel = styled.p`
    color: var(--dark-blue);
    margin-bottom: .5rem;
`

export const SelectButton = styled.button`
    margin-bottom: 1rem;
    color: var(--dark-blue);
    border: 1px solid var(--lighter-gray);
    border-radius: 4px;
    padding: .6rem .8rem;
    width: 15rem;
    font-size: 1rem;
`

export const OptionsContainer = styled.div`
    position: absolute;
    top: 4.2rem;
    left: 0;
    background-color: #ffffff;
    border: 1px solid var(--lighter-gray);
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-shadow: var(--button-shadow);
    z-index: 5;
    width: 15rem;
`

export const Option = styled.p`
    display: block;
    color: var(--dark-blue);
    padding: .3rem;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    
    &:hover {
        background-color: #f4f4f4f4;
    }
`

export const AdditionlContainer = styled.div`
    max-height: ${({ enablePerson }) => enablePerson ? 'auto' : 0};
    transition: all .5s ease-in-out;
`

export const GeneralError = styled.p`
    margin-top: 1rem;
    color: var(--alert-color);
    font-size: 1rem;
`

export const CalendarContainer = styled.div`
    position: relative;
`

export const CalendarBox = styled.div`
    position: absolute;
    top: 2.7rem;
    background-color: #ffffff;
    border: 1px solid var(--lighter-gray);
    border-radius: 0 0 4px 4px;
    box-shadow: var(--button-shadow);
    z-index: 5;
`

export const CalendarButton = styled.button`
    width: 9rem;
    border: 1px solid var(--lighter-gray);
    border-radius: 4px;
    padding: .6rem .8rem;
    font-size: 1rem;
    color: var(--light-gray);
    margin-bottom: 1rem;
`

// LANDING FORM
export const LandingForm = styled.div`
    width: 45%;
    border-radius: 5px;
    padding: 1rem 0;
    
    @media all and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }

    @media all and (max-width: 450px) {
        width: 95%;
        margin: 0 auto;
    }
`

export const LandingTitle = styled.h1`
    width: ${commonWidth};
    margin: 0 auto;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    font-weight: 400;
    border-bottom: 1px solid var(--lighter-gray);
    color: var(--dark-blue);
`