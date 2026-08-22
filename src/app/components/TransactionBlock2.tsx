import React from "react";
import {IndianRupee, ArrowUp, WalletCards, Receipt } from "lucide-react";

const TransactionBlock2 = () =>{
    return(
        <>
            <div className="mainblock grid md:grid-cols-4 gap-2 p-2 mt-2.5 grid-cols-2">
                <div className="border-white/[0.07] bg-white/[0.08] totalIncome border p-1 rounded-xl flex items-center gap-2 cursor-pointer hover:translate-y-[-2px] transition-all duration-300 hover:bg-white/[0.05]">
                    <div className="icon w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <IndianRupee size={45}/>
                    </div>
                    <div className="info flex flex-col justify-between border-white/[0.07]">
                    <p className="text-[10px] font-hero text-slate-400">Total Income</p>
                    <p className="text-2xl">{"\u20B9"}18000</p>
                    <span className="text-slate-500 font-hero text-[10px]">this mont</span>
                    </div>
                </div>
                <div className="border-white/[0.07] bg-white/[0.08] totalExpence border p-1 rounded-xl flex items-center gap-2 cursor-pointer hover:translate-y-[-2px] transition-all duration-300 hover:bg-white/[0.05]">
                    <div className="icon w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                        <ArrowUp size={45}/>
                    </div>
                    <div className="info flex flex-col justify-between border-white/[0.07]">
                    <p className="text-[10px] font-hero text-slate-400">Total Expence</p>
                    <p className="text-2xl">{"\u20B9"}18000</p>
                    <span className="text-slate-500 font-hero text-[10px]">this mont</span>
                    </div>
                </div>
                <div className="border-white/[0.07] bg-white/[0.08] netBalance border p-1 rounded-xl flex items-center gap-2 cursor-pointer hover:translate-y-[-2px] transition-all duration-300 hover:bg-white/[0.05]">
                    <div className="icon w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <WalletCards size={45}/>
                    </div>
                    <div className="info flex flex-col justify-between border-white/[0.07]">
                    <p className="text-[10px] font-hero text-slate-400">Net Balance</p>
                    <p className="text-2xl">{"\u20B9"}18000</p>
                    <span className="text-slate-500 font-hero text-[10px]">this mont</span>
                    </div>
                </div>
                <div className="border-white/[0.07] bg-white/[0.08] totalTransactions border p-1 rounded-xl flex items-center gap-2 cursor-pointer hover:translate-y-[-2px] transition-all duration-300 hover:bg-white/[0.05]">
                    <div className="icon w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Receipt size={45}/>
                    </div>
                    <div className="info flex flex-col justify-between border-white/[0.07]">
                    <p className="text-[10px] font-hero text-slate-400">Total Transactions</p>
                    <p className="text-2xl">{"\u20B9"}18000</p>
                    <span className="text-slate-500 font-hero text-[10px]">this mont</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TransactionBlock2