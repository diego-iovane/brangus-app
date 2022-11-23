import styled from 'styled-components'

export const BgSection = styled.div`
    position: relative;
    min-height: 41rem;
    padding-bottom: 1rem;
    width: 100%;
    background-color: #ffffff;
    background-image: ${({bg}) => `url(${bg})`};
    background-size: cover;
    background-repeat: no-repeat;
    

    &:after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 0;
    }
`

export const Inner = styled.div`
    position: absolute;
    max-width: var(--section-max-width);
    width: 100%;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const LogoContainer = styled.div`
    width: 80%;
    position: relative;
    bottom: -4rem;

    @media all and (max-width: 650px) {
        bottom: -2rem;
    }

    @media all and (max-width: 450px) {
        bottom: 0rem;
        width: 95%;
    }
`

export const Logo = styled.img`
    width: 100%;
    height: auto;
`