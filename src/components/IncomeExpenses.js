import React from 'react'
import styled from 'styled-components'

export const IncomeExpenses = () => {
    return (
        <IncomeExprensesStyled>
            <div className="inc-exprenses-container">
                <div className="money-plus-con">
                    <h4 className="title">Income</h4>
                    <h2 id="money-plus" className="money plus">$500</h2>
                </div>
                <div className="money-minus-con">
                    <h4 className="title">Expense</h4>
                    <h2 id="money-minus" className="money minus">-$240</h2>
                </div>
            </div>
        </IncomeExprensesStyled>
    )
}

const IncomeExprensesStyled = styled.div`
    .inc-exprenses-container{
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
        margin: 2em;   
    }
    .money-plus-con{
        padding: 1em;
        border-right: 1px solid #dedede;
    }
    .money-minus-con{
        padding: 1em;
    }
    .title, .money{
        font-size: 1.4em;
        letter-spacing: 0.1em;
        margin: 0.25em 0;
    }
    .money.plus{
        color: #2ecc71;
    }
    .money.minus {
        color: #c0392b;
      }
`;