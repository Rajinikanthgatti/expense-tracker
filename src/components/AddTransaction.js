import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount,
        }
        if((text.trim().length !== 0)){
            addTransaction(newTransaction);
            setText('');
            setAmount(0);
        } else{
            toast('Please provide a valid name');
        }
    }

    return (
        <div id="add-trans-con" className="add-trans-con">
            <h3>Add new transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) =>setText(e.target.value)} name="text" placeholder="Enter text here..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) =>setAmount(e.target.value)} name="amount" placeholder="Enter amount here..."/>
                </div>
                <button className="btn">Add transaction</button>
                <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover/>
            </form>
        </div>
    )
}
