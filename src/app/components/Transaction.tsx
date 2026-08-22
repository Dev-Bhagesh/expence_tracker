import React from "react";
import TransactionBlock2 from "./TransactionBlock2";

const TransactionPartOne = () => {
    return (<>
        <div>
            <div className="bolck1 flex justify-between m-2">
                <div className="heading">
                    <h1 className="font-bold text-3xl">Transactions</h1>
                    <p className="text-slate-400 text-[10px]">Track and manage all your income and expences</p>
                </div>
                <button className="text-[12px] bg-[#5F26E3] rounded-2xl px-3 py-2">
                    <span className="hidden md:inline">+ Add Transaction</span>
                    <span className="inline md:hidden">+AT</span>
                </button>
            </div>
            <TransactionBlock2/>
        </div>
    </>)
}

export default TransactionPartOne