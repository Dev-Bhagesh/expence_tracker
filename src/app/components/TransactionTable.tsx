"use client"
import React from "react"
import { useState } from "react"
import { transactions } from "@/data/transaction"
import TransactionRow from "./TransactionRow"

const TransactionTable = () =>{
    const ITEMS_PER_PAGE = 10;
    const [currentPage,setCurrentPage] = useState(1);

    const totalPages = Math.ceil(
        transactions.length / ITEMS_PER_PAGE
    )

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentTransactions = transactions.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    )
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
                        {currentTransactions.map((transaction)=>(
                            <TransactionRow
                            key={transaction.id}
                            transaction={transaction}/>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-2 py-2">
                    <button onClick={()=>setCurrentPage((prev)=>prev-1)} disabled={currentPage === 1} className="cursor-pointer px-3 py-1 rounded-lg bg-[#121027] disabled:opacity-40">
                        Previous
                    </button>
                    <span className="text-sm">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button onClick={()=>setCurrentPage((prev)=>prev+1)} disabled={currentPage === totalPages} className="cursor-pointer px-3 py-1 rounded-lg bg-[#121027] disabled:opacity-40">
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}
export default TransactionTable;