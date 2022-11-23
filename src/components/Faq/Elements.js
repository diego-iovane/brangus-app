import styled from "styled-components"

export const Inner = styled.div`
    width: 65%;
    margin: 5rem auto 6rem auto;
    max-width: var(--section-max-width);
    padding: 3rem;
    box-shadow: var(--container-shadow);
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    @media all and (max-width: 1080px) {
        width: 70%;
        margin: 0 auto 2rem auto;
    }

    @media all and (max-width: 768px) {
        width: 85%;
        margin: 0 auto;
        padding: 2rem;
    }

    @media all and (max-width: 450px) {
        width: 95%;
        margin: 0 auto;
        padding: 1rem;
    }
`

export const Item = styled.div``

export const Qheader = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--lighter-gray);
    padding: .5rem;
`

export const Q = styled.h3`

`

export const ArrowContainer = styled.div`
    width: 1rem;
    height: 1rem;
`

export const Arrow = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    rotate: ${({active}) => active ? 'x 180deg' : 'x 0deg'};
    transition: rotate .5s cubic-bezier( 1, 0, 0, 1 );
`

export const AContainer = styled.div`
    margin: 1rem;
    overflow: hidden;
    max-height: ${({active}) => active ? '100rem' : '0'};
    transition: max-height .5s cubic-bezier( 1, 0, 0, 1 );
`

export const A = styled.p`
    margin-bottom: .5rem;
`