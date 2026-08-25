"use client"
import React from "react"
import { transactions } from "@/data/transaction"
import TransactionRow from "./TransactionRow"

const TransactionTable = () =>{
    return(
        <>
            <div className="w-[100%] mt-3 overflow-x-auto rounded-2xl grid gap-2 border border-white/[0.08] p-2">
                <table className="">
                    <thead className="bg-[#121027] border border-white/[0.08] rounded-2xl border-l-0 border-r-0 border-t-0">
                        <tr className="">
                            <th className="p-1 text-left">Date</th>
                            <th className="p-1 text-left">Description</th>
                            <th className="p-1 text-left">Category</th>
                            <th className="p-1 text-left">Payment Method</th>
                            <th className="p-1 text-left">Amount</th>
                            <th className="p-1 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="cursor-pointer bg-white/[0.08] rounded-2xl">
                        {transactions.map((transaction)=>(
                            <TransactionRow
                            key={transaction.id}
                            transaction={transaction}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default TransactionTable;