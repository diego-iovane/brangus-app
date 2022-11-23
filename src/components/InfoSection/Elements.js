import styled from 'styled-components'

export const Inner = styled.div`
    width: 100%;
    padding-top: 5rem;
    padding-left: 3rem;
    padding-right: 3rem;
    margin: 0 auto;
    max-width: var(--section-max-width);
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 768px) {
        flex-direction: column;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export const Left = styled.div`
    width: 50%;

    @media all and (max-width: 768px) {
        width: 100%;
    }
`

export const Title = styled.h2`
    font-weight: 400;
    font-size: 3rem;
    color: var(--dark-blue);
    margin-bottom: .7rem;
    line-height: 1;
`

export const Dates = styled.p`
    font-size: 1.5rem;
    color: var(--light-gray);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 1rem;
`

export const Description = styled.p`
    line-height: 1.5;
`

export const Right = styled.div`
    width: 45%;
    display: flex;
    justify-content: flex-end;

    @media all and (max-width: 768px) {
        width: 100%;
        height: 15rem;
        margin: 2rem 0 3rem 0;
    }
`

export const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.16);
`