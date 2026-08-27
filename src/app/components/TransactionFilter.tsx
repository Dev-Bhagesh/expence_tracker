"use client"
import React from "react";
import { useState } from "react";

const TransactionFilter = () =>{

    const [category,setCategory] = useState("");
    const [paymentMethod,setPaymentMethod] = useState('');

    const Reset=()=>{
        setCategory('');
        setPaymentMethod('');
    }
 
    return(
        <>
            <div className="FilterBody w-full flex flex-col p-2">
                <div className="searchBox w-full flex items-center justify-between">
                    <div className="searchBar w-[50%]">
                        <input type="text" className="border p-1 w-full rounded-2xl text-sm h-[35px] border-white/[0.08] transition-all duration-300" placeholder="Search here" />
                    </div>
                    <div className="filterLabel flex justify-end">
                        <div className="label bg-white/[0.07] border-white/[0.07] text-center w-[80px] p-2 rounded-2xl text-white hover:translate-y-[-2px] duration-300 transition-all cursor-pointer font-hero hover:bg-[#5F26E3]">
                            Filters
                        </div>
                    </div>
                </div>

                <div className="filterCategory w-full md:flex mt-2 gap-2 justify-around">
                        <div className="buttons md:w-[50%] flex gap-2 p-2 md:border-t-0 md:border-l-0 md:border-b-0 md:border justify-around ">
                            <button className="border p-2 rounded-xl w-30 md:w-40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] border-white/[0.07]">All</button>
                            <button className="border p-2 rounded-xl w-30 md:w-40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] border-white/[0.07]">Income</button>
                            <button className="border p-2 rounded-xl w-30 md:w-40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] border-white/[0.07]">Expence</button>
                        </div>

                        <div className="dropDowns flex items-center gap-1 md:w-[50%] justify-around">
                            <select name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-black w-30 rounded-xl border p-2 md:w-40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] focus:border-[#7CeAED] focus:outline-none focus:ring-0 border-white/[0.07]">
                                <option value="">Category</option>
                                <option value="food">Food</option>
                                <option value="transport">Transport</option>
                                <option value="shopping">Shopping</option>
                            </select>

                            <select onChange={(e)=>setPaymentMethod(e.target.value)} name="paymentMethod" id="paymentMethod" value={paymentMethod} className="bg-black w-30 rounded-xl border p-2 md:w-40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] focus:border-[#7CeAED] focus:outline-none  border-white/[0.07]">
                                <option value="">Payment Method</option>
                                <option value="upi">UPI</option>
                                <option value="visa">VISA</option>
                                <option value="banktransfer">Bank Transfer</option>
                                <option value="cash">Cash</option>
                                <option value="cheque">Cheque</option>
                                <option value="debitcard">Debit Card</option>
                                <option value="creditcard">Credid Card</option>
                                <option value="autodebit">Auto Debit</option>
                                <option value="wallet">Wallet</option>
                                <option value="emi">EMI</option>
                            </select>

                            <button className="border w-20 p-2 rounded-xl w-30 md:w-40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] border-white/[0.07]" onClick={()=>Reset()}>Clear</button>
                        </div>
                </div>
            </div>
        </>
    )
}
export default TransactionFilter