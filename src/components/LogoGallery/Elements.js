import styled from 'styled-components'

export const Inner = styled.div`
    width: 100%;
    max-width: var(--section-max-width);
    margin: 0 auto;
    padding-left: 3rem;
    padding-right: 3rem;

    @media all and (max-width: 768px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export const Title = styled.h2`
    font-weight: 400;
    font-size: 3rem;
    color: var(--dark-blue);
    margin-bottom: .7rem;
    line-height: 1;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: .5rem;
`

export const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 95%;
    padding-top: 3rem;
    margin: 0 auto;
`

export const Item = styled.div`
    flex-basis: 30%;
    width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`   
    width: auto;
    height: 60%;
    object-fit: contain;
    margin: 0 auto;
`