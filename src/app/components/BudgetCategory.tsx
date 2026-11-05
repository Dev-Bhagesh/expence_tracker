"use client"
import { transactions } from "@/data/transaction";
import React from "react";
import { useState,useEffect } from "react";

const BudgetCategory = () =>{

    const months = transactions.map((transactions)=>{
        const date = new Date(transactions.date);
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        return `${year}-${month}`;
    })
    const UniqueMonth = [...new Set(months)];

    return(
        <>
            <div className="mainBlock">
                <div className="head flex justify-between">
                    <div className="title">
                        <h1 className="text-2xl font-bold font-hero ">Budget</h1>
                        <span className="text-slate-400 text-[14px]">See how much you spend in a month</span>
                    </div>
                    <div className="filter mr-[20px] text-center ">
                        <select name="months" id="months" className="bg-black cursor-pointer border p-2 rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:border-[#7CeAED] hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] focus:border-[#7CeAED] focus:outline-none foucs:ring-0 border-[#7c3aed]">
                           {UniqueMonth.map((months)=>{
                            return(
                                <option value="" key={months}>{months}</option>
                            )
                           })}
                        </select>
                    </div>
                </div>

                <div className="categorysBlock">
                    
                </div>
            </div>
        </>
    )
}
export default BudgetCategory;