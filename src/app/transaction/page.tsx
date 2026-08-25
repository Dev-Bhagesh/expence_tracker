import React from "react";
import TransactionPartOne from "../components/Transaction";
import TransactionTable from "../components/TransactionTable";
import TransactionFilter from "../components/TransactionFilter";
const Transaction = ()=>{
    return(
        <>
        <div className="TransactionPage p-2">
            <TransactionPartOne/>
            <TransactionFilter/>
            <TransactionTable/>
        </div>
        </>
    )
}
export default Transaction