import React from 'react'
import styled from 'styled-components'

export const Header = () => {
    return (
        <HeaderStyled>
            Expense Tracker
        </HeaderStyled>
    )
}
const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2em;
    padding: 1em 0;
`;