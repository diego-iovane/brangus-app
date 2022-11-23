import styled from 'styled-components'

export const DropdownContainer = styled.div`
    position: relative;
`

export const Button = styled.button`
    position: relative;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const DropdownBox = styled.div`
    visibility: ${({opened}) => opened ? 'visible' : 'hidden'};
    position: absolute;
    top: 1.5rem;
`

export const DropdownItem = styled.div`

`

export const FlagContainer = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Flag = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
`

export const Arrow = styled.div`
    position: absolute;
    right: 0;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #555;
    rotate: ${({opened}) => opened && 'x 180deg'};
    transition: rotate .5s;
`