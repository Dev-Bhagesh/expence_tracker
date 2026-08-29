import React from "react";

const BudgetHead = () => {
    return (
        <>
            <div className="budgethead flex items-center justify-between">
                <div className="block1">
                    <h1 className="font-hero font-bold text-4xl">Budget</h1>
                    <span>Track and Manage your monthly spending limit</span>
                </div>
                <div className="block2">
                    <button className="gap-1 flex items-center p-2 rounded-xl text-sm font-mono bg-gradient-to-r from-[#956DFC] to-[#6427F7] cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(149,109,252,0.25),0_8px_35px_rgba(100,39,247,0.25)] transition-all duration-300 w-[150px]">
                        <div className="text-2xl">
                            +
                        </div>
                        Create Budget</button>
                </div>
            </div>
        </>
    )
}
export default BudgetHead