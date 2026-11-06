import React from "react";

const ReoccuringHeadText = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col">
                <h1 className="text-xl">This is reoccuring heading text</h1>
                <h3 className="text-sm text-slate-300">Manage your recurring income and expences</h3>
            </div>
            
            <div>
                <button className="p-2 border rounded-2xl bg-[#5f26e3] border-none outline-none ring-0 focus:outline-none focus:ring-0 cursor-pointer hover:translate-y-0.5 transition-transform duration-300 ">+Add Recurring</button>
            </div>
        </div>
    )
}

export default ReoccuringHeadText