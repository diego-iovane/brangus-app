import styled from 'styled-components'

export const Inner = styled.div`
    width: 100%;
    max-width: var(--section-max-width);
    margin: 0 auto;
    padding: 70px 0 60px 0;
`

export const Content = styled.div`
    display: flex;
    padding: 0 15px;

    @media all and (max-width: 650px) {
        flex-direction: column;
    }
`

export const LogoContainer = styled.div`
    flex: 1;
    margin: .5rem;

    @media all and (max-width: 650px) {
        margin: 0 auto 2rem auto;
        width: 13rem;
    }
`

export const Logo = styled.img`
    width: 100%;
    height: 60%;
    object-fit: contain;
`