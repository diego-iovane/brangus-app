import styled from "styled-components"

export const Inner = styled.div`
    width: 100%;
    margin: 5rem auto 2rem auto;
    max-width: var(--section-max-width);
    display: flex;

    @media all and (max-width: 1080px) {
        flex-direction: column;
    }
`

export const Card = styled.article`
    flex: 1;
    margin: 0 .4rem;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
    display: flex;
    flex-direction: column;

    @media all and (max-width: 1080px) {
        width: 70%;
        margin: 0 auto 1rem auto;
    }

    @media all and (max-width: 768px) {
        width: 85%;
    }

    @media all and (max-width: 450px) {
        width: 95%;
    }
`

export const Top = styled.div`
    padding: 1rem;
`

export const Pack = styled.p`
    text-align: center;
`

export const Title = styled.h2`
    text-align: center;
`

export const Dates = styled.p`
    text-align: center;;
`

export const Bottom = styled.div`
    background-color: var(--dark-blue);
    padding: 1rem 2rem 2rem 2rem;
    border-radius: 0 0 5px 5px;

    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DetailsContainer = styled.div`
    margin-bottom: .8rem;
`

export const DetailsTitle = styled.p`
    color: #ffffff;
    margin-bottom: .3rem;
`

export const Details = styled.ul`
    list-style-type: circle;
    padding: 0 1rem;
`

export const Detail = styled.li`
    color: #ffffff;
    margin-bottom: .2rem;
    letter-spacing: 1px;
`

export const Prices = styled.div`
    position: relative;
    margin-top: 2rem;

    &:before {
        content: '';
        position: absolute;
        top: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 1px;
        background-color: #ffffff;
    }

`

export const Price = styled.p`
    color: #ffffff;
    margin-bottom: .7rem;
`

export const Strong = styled.span`
    color: #ffffff;
    font-weight: bold;
`

export const Note = styled.p`
    font-size: .8rem;
    color: #ffffff;
    letter-spacing: 1px;
`

export const GlobalNote = styled.p`
    font-size: .8rem;
    max-width: 50rem;
    margin: 0 auto 3.5rem auto;

    @media all and (max-width: 1080px) {
        width: 70%;
    }

    @media all and (max-width: 768px) {
        width: 85%;
    }

    @media all and (max-width: 450px) {
        width: 95%;
    }
`