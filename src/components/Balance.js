import React from 'react'
import styled from 'styled-components'

export const Balance = () => {
    return (
        <BalanceStyled>
            <div className="container">
                <h4 className="bal-title">Your Balance</h4>
                <h1 className="balance">$260.00</h1>
            </div>
        </BalanceStyled>
    )
}

const BalanceStyled = styled.div`
    .bal-title{
        margin: 0;
        margin-top: 1.5em;
    }
    .balance{
        margin: 0;
    }
`;