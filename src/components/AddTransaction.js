import React from 'react'

export const AddTransaction = () => {
    return (
        <div className="add-trans-con">
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" name="text" placeholder="Enter text here..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Enter amount here..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
