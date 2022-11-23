import styled from 'styled-components'

//NOTE> SIZES ARE IN PX AS TO REPLICATE DE INSTITUTIONAL WEBSITE MADE IN WP

export const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({reduced}) => reduced ? 'var(--dark-blue)' : 'transparen'};
    height: ${({reduced}) => reduced ? '60px' : 'auto'};
    z-index: 5;
    transition: background-color .3s ease-in-out, height .8s ease;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: rgba(250, 250, 250, .11);
        bottom: 0;
    }
`

export const Inner = styled.div`
    width: 100%;
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 15px;
`

export const LogoContainer = styled.div`
    display: inline-block;
    padding: 24px 0px 14px 0px;
    position: relative;
    z-index: 9;
    top: ${({reduced}) => reduced ? '-2px' : '-1.5px'};
    ${({reduced}) => reduced && 'padding-left: 10px;'}
    ${({reduced}) => reduced && 'padding-top: 17px;'}
`

export const LogoAnchor = styled.a`

`

export const Logo = styled.img`
    ${({reduced}) => reduced ? 
    `
        height: 34px;
    ` : 
    `   width: 100%;
        height: auto;
    `
}
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Nav = styled.nav`
    @media all and (max-width: 768px) {
        display: none;
    }
`

export const Link = styled.a`
    display: inline-block;
    padding: ${({reduced}) => reduced ? '22px 10px' : '37px 10px'};
    margin: 0px 15px;
    line-height: 16px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #ffffff;

    &:last-child {
        margin-right: 0;
    }
`

export const DropdownContainer = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;

    @media all and (max-width: 768px) {
        display: none;
    }
`