import styled from 'styled-components'

export const Section = styled.div`
    width: 100%;
    min-height: ${({minHeight}) => minHeight ? minHeight : 'var(--section-min-height)' };
    background-color: ${({bgColor}) => bgColor ? bgColor : '#ffffff'};
    margin-top: ${({topMargin}) => topMargin ? topMargin : '0'};
    margin-bottom: ${({bottomMargin}) => bottomMargin ? bottomMargin : '0'};
`