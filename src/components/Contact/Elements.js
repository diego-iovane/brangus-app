import styled from 'styled-components'

export const Inner = styled.div`
    width: 100%;
    margin: 0 auto 5rem auto;
    max-width: var(--section-max-width);
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 768px) {
        display: none;
    }
`

export const Logo = styled.img`
    width: 80%;
    height: auto;
    object-fit: contain;
`

export const SmallLogoContainer = styled.div`
    width: 8rem;
    position: relative;
    right: .8rem;
    bottom: .7rem;
`

export const SmallLogo = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`