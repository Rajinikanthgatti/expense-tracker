import React, {useContext} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <div className="trans-con">
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.length <1 ? <div className="no-trans">No Transactions to show.</div> : transactions.map( transaction => (
                    <Transaction key = {transaction.id} transaction={transaction}></Transaction>
                ) )}
            </ul>
        </div>
    )
}
const TransactionListStyled = styled.div`
    padding: 1em;
    .list li{
        background-color: #fff;
        box-shadow: var(--box-shadow);
        padding: 0.5em 0.5em;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .list .minus{
        border-right: 5px
        solid #c0392b;
        margin: 0em;
        position: absolute;
        right: 0;
        transform: translate(8%, -20%);
        line-height: 2.25em;
        text-align: center;
        align-items: center;
    }
    .delete-btn{
        position: absolute;
        left: 0;
        top: 50%;
        background-color: #e74c3c;
        border: 0;
        color: #fff;
        font-size: 1em;
        padding: 2px 5px;
        transform: translate(-100%, -50%);
        transition: opacity 0.3s ease;
    }
    @media (max-width: 460px) {
        padding: 1em;
    }
`;