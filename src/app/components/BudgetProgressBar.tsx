import React from "react";

const BudgetProgressBar = () => {
    const total = 35000;
    const spent = 25200;
    const remaning = total - spent;
    const percentage = (spent / total) * 100;
    return (
        <>
            <div className="ProgressBar md:flex md:justify-between ">
                <div className="block1 flex flex-col flex-1 p-1 ">
                    <div className="labels">
                        <span className="font-light text-slate-400 text-[12px]">Monthly Budget</span>
                        <div className="herolabel flex justify-between">
                            <div className="amount">
                                <h1 className="text-3xl font-hero font-bold ">35,000</h1>
                            </div>

                            <div className="text-xl items-center p-1 difference flex justify-between">
                                <div className="spent border w-[100px] text-center border-l-0 border-b-0 border-t-0 ">25,200</div>
                                <div className="remaning border w-[100px] text-center border-0">9,800</div>
                            </div>
                        </div>
                        <span className="font-light text-slate-400 text-[12px] ">Total budget</span>
                    </div>
                    <div className=" mt-3 barLine w-full h-3 bg-slate-800 rounded-2xl overflow-hidden">

                        <div className="innerbar h-full bg-gradient-to-r from-[#956DFC] via-[#7C3FF8] to-[#6427F7] rounded-2xl " style={{ width: `${percentage}%` }}>
                        </div>
                    </div>

                    <div className="labels flex justify-between">
                        {<span>{percentage}% spent</span>}
                        {<span>{remaning} remaining</span>}
                    </div>
                </div>

                {/* Block 2 */}
                <div className="block2 md:flex items-center justify-center hidden">
                    <div className="relative md:w-32 md:h-32 h-25 w-25 rounded-full" style={{background:`conic-gradient(#7C3FF8 ${percentage}% , #1e293b ${percentage}% 100%)`}}>
                            <div className="absolute inset-3 rounded-full bg-slate-950 flex flex-col items-center justify-center">
                                <span>{Math.round(percentage)}%</span>
                                <span>Used</span>
                            </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default BudgetProgressBar