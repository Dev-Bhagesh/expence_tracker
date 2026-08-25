
import React from "react";

const TransactionFilter = () =>{
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

                <div className="filterCategory">

                </div>
            </div>
        </>
    )
}
export default TransactionFilter