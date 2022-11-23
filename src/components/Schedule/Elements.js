import styled from 'styled-components'

export const Inner = styled.div`
    width: 100%;
    padding: 5rem 3rem;
    margin: 0 auto;
    max-width: var(--section-max-width);
    display: flex;
    flex-direction: column;

    
    @media all and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        padding: 3rem 0;
    }

    @media all and (max-width: 450px) {
        width: 95%;
        margin: 0 auto;
        padding: 2rem 0;
    }

`

export const Title = styled.h2`
    font-weight: 400;
    font-size: 3rem;
    color: var(--dark-blue);
    margin-bottom: 3rem;
    line-height: 1;

    @media all and (max-width: 450px) {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
`

export const Content = styled.div`
    background-color: #ffffff;
    width: 100%;
    max-width: calc(var(--section-max-width) - 5rem);
    padding: 5%;
    box-shadow: var(--container-soft-shadow);
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    @media all and (max-width: 450px) {
        padding: 2rem;
    }
`

export const Item = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2.5rem;
    position: relative;

    //PARA HACERLO DESPLEGABLE
    /* max-height: 12rem; */
    /* overflow: hidden; */

    @media all and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid var(--lighter-gray);
    }
`

export const DateContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2rem;

    @media all and (max-width: 768px) {
        flex-direction: row;
    }

    @media all and (max-width: 450px) {
        width: 100%;
    }
`

export const Date = styled.p`
    font-size: clamp(1.8rem, 4vw, 2rem);
    color: var(--dark-blue);
`

export const Day = styled.p`
    font-size: 2vw;
    font-size: clamp(1.5rem, 3vw, 1.5rem);

    @media all and (max-width: 768px) {
        margin-left: .5rem;
        color: var(--light-gray);
    }
    
`

export const BodyContainer = styled.div`
    flex: 4;
    position: relative;
    border-bottom: 1px solid var(--lighter-gray);
    padding-bottom: 2.5rem;

    @media all and (max-width: 768px) {
        border-bottom: none;
    }
    
    @media all and (max-width: 450px) {
        width: 100%;
        padding-bottom: 1.5rem;
    }
`

export const BodyTitle = styled.h3`
    font-size: 2rem;
    color: var(--dark-blue);
    margin-bottom: .5rem;
`

export const BodyText = styled.p`
    font-size: .9rem;
    color: var(--softer-gray);
    margin-bottom: .5rem;
`

export const BodyLocation = styled.p`
    display: flex;
    align-items: flex-end;
    margin-top: 1rem;
    /* cursor: pointer; */
`

export const LocationIcon = styled.span`
    width: 1rem;
    height: 1rem;
`

export const Icon = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`

export const LocationText = styled.span`
    font-size: .8rem;
    color: var(--light-gray);
    position: relative;
    margin-left: .2rem;
    line-height: 1;
`

export const LogoContainer = styled.div`
    flex: 1;
    position: relative;
    margin-left: 1.2rem;
    display: flex;
    bottom: 2rem;

    @media all and (max-width: 768px) {
        width: 20%;
        margin: 2rem auto 0 auto;
    }

    @media all and (max-width: 450px) {
        width: 40%;
    }
`

export const Logo = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`