import React , { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

console.log('GlobalState.js')

//Initial state
const initialState = {
    transactions:[]
}

//creating context
export const GlobalContext =   createContext(initialState)

//creating provider
export const GlobalProvider = ({children}) => {
    console.log('Inside Provider')
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    
    function addTransaction(transaction){
        console.log('Entered addTrans')
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>);
}