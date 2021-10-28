import React, {useContext} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => (transaction.amount));
    const total = amount.reduce((prev, next)=>( prev+=next), 0).toFixed(2)
    return (
        <BalanceStyled>
            <div className="container">
                <h4 className="bal-title">Your Balance</h4>
                <h1 className="balance">${total}</h1>
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