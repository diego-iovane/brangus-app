import styled from 'styled-components'

// ICON
export const Hamb = styled.button`
    background: transparent;
    border: 1px solid #ffffff;
    outline: none;
    cursor: pointer;
    z-index: 800;

    align-self: center;
    margin-right: 15px;
    padding: 4px 9px;
    border-radius: 4px;
    position: relative;
    bottom: 4px;

    @media all and (min-width: 768px) {
        display: none;
    }
`

export const Span = styled.span`
    display: block;
    width: 22px;
    height: 2px;
    background-color: white;
    margin-block: 5px;
    border-radius: 1px;
    transition: transform .5s, opacity .25s;

    &:nth-child(1) {
        transform: ${({opened}) => opened ? 'translateY(7px) rotate(45deg)' : 'none'};
    }

    &:nth-child(2) {
        opacity: ${({opened}) => opened ? '0' : '1'};
    }

    &:nth-child(3) {
        transform: ${({opened}) => opened ? 'translateY(-7px) rotate(-45deg)' : 'none'};
    }
`

// MENU

export const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--dark-blue);
    max-height: ${({opened}) => opened ? '100rem' : '0rem'};
    overflow: hidden;
    transition: max-height .5s cubic-bezier( 1, 0, 0, 1 );
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 7rem 2rem 0 2rem;
`

export const Link = styled.a`
    padding: 15px 0;
    line-height: 16px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: white;
    text-align: right;
`

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
`