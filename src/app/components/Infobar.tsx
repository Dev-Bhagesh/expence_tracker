
import React from "react";

const Infobar = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08]">

            <div className="py-5 px-2 border-b border-white/[0.08] md:border-b-0 md:border-r font-bold">
                <p className="text-slate-600 text-[10px]">Total income</p>
                <p className="text-[30px] font-display">₹ 35,000</p>
                <p className="text-slate-300">statastics</p>
            </div>

            <div className="py-5 px-2 border-b border-white/[0.08] md:border-b-0 md:border-r font-bold">
                <p className="text-slate-600 text-[10px]">Total expence</p>
                <p className="text-[30px] font-display">₹ 35,000</p>
                <p className="text-slate-300">statastics</p>
            </div>

            <div className="py-5 px-2 font-bold">
                <p className="text-slate-600 text-[10px]">Total budget</p>
                <p className="text-[30px] font-display">₹ 35,000</p>
                <p className="text-slate-300">statastics</p>
            </div>

        </div>
    );
};

export default Infobar;