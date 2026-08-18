import React from "react";

const Balance = () => {

    return (
        <>
            <div className="MainBlock bg-white/[0.03] p-4 rounded-2xl backdrop-blur-xl border-white/[0.08] 
            shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex justify-around min-h-[255px] items-center relative overflow-hidden">
                <div className="subBlock1 flex-1">
                    <span className="font-subhead text-sm">Available balance</span>
                    <p className="font-hero font-bold text-[60px]">16,500</p>
                    <div className="buttons flex mt-1.5 gap-2 text-sm">
                        <button className="font-bold expence text-xs w-30 border bg-[#7c3aed] cursor-pointer border-[#8b5cf6] px-[10px] py-[10px] transition-all duration-200 hover:translate-y-[-1.5px] hover:bg-white/[0.05] rounded-[10px]">Add expence</button>
                        <button className="cursor-pointer transition-all duration-200 hover:translate-y-[-1.5px] income w-30 px-[10px] py-[10px] text-xs rounded-[10px] border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] text-slate-300">Add income</button>
                    </div>
                </div>
                <div className="subBlock2 pointer-events-none flex-1 z-[-1] absolute right-[-70px] top-[20px] opacity-50 md:relative md:right-auto md:top-auto md:opacity-100">
                    <div className="scene relative w-[330px] h-[220px] flex items-center justify-center ">
                        <div className="orb absolute w-[130px] h-[130px] left-[100px] top-[45px] rounded-full bg-[radial-gradient(circle_at_30%_25%,#ddd6fe,#8b5cf6_37%,#24113f_78%)] shadow-[0_0_60px_#8b5cf655,inset_-20px_-18px_30px_#160b2e] animate-orb-float">

                            <div className="ruppey absolute left-[25px] top-[25px] w-[80px] h-[80px] rounded-full border border-[#c4b5fd55] bg-[#11152acc] flex items-center justify-center text-[#fbbf24] text-[40px] font-extrabold">
                                ₹
                            </div>

                        </div>
                        <div className="ring1 absolute w-[220px] h-[70px] left-[55px] top-[75px] rounded-[50%] border border-[#a78bfa77] rotate-[-20deg] animate-orb-ring"></div>
                        <div className="ring2 absolute w-[150px] h-[215px] left-[90px] top-[2px] animate-orb-ring2 rounded-[50%] border border-[#22d3ee44] rotate-[55deg]"></div>
                        <div className=" absolute animate-orb-drift dot1 right-[35px] top-[30px] w-[7px] h-[7px] rounded-full bg-[#c4b5fd] shadow-[0_0_14px_#a78bfa] " />

                        <div className="dot2 absolute animate-orb-drift left-[42px] bottom-[22px] w-[7px] h-[7px] rounded-full bg-[#22d3ee] shadow-[0_0_14px_#22d3ee]" />

                        <div className="dot3 absolute animate-orb-drift right-[72px] bottom-[12px] w-[7px] h-[7px] rounded-full bg-[#f59e0b] shadow-[0_0_14px_#f59e0b]" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Balance