"use client"
import React from "react";
// import finora_logo from './public/finora_logo.png';
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Menu, LayoutDashboard, CircleHelp, Info, ArrowLeftRight, Wallet, PiggyBank, BarChart, Repeat, Settings, icons } from "lucide-react";

const Sidebar = () => {
    const [isActive, setIsActive] = useState('Dashboard')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Side bar navigation labels
    const navitems = [
        {
            label: "Dashboard",
            icon: LayoutDashboard
        },
        {
            label: "Transaction",
            icon: ArrowLeftRight,
        },
        {
            label: "Income",
            icon: Wallet,
        },
        {
            label: "Budget",
            icon: PiggyBank,
        },
        {
            label: "Analytics",
            icon: BarChart,
        },
        {
            label: "Recurring",
            icon: Repeat,
        },
        {
            label: "Settings",
            icon: Settings,
        },
        {
            label: "About",
            icon: Info
        },
        {
            label: "Help",
            icon: CircleHelp,
        }
    ]
    return (
        <>
            <button onClick={() => setIsMenuOpen(true)} className={`bg-[rgba(124,58,237,0.9)] rounded p-0.5 fixed top-5 left-5 z-40 md:hidden ${isMenuOpen ? "hidden" : ""}`}>
                <Menu size={20} />
            </button>

            {/* <div className={`w-[220px] p-5 border-r border-white/[0.08] flex flex-col 
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0`}> */}

            <div className={`fixed inset-y-0 left-0 z-30 w-[220px] p-5 border-r border-white/[0.08] flex flex-col bg-black 
                transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>

                <button onClick={() => setIsMenuOpen(false)} className="absolute top-2 left-2 md:hidden">
                    <X size={24} />
                </button>

                <div className="mb-10 font-hero text-xl flex items-center justify-center ">
                    <Image src="/finora_logo.png" alt="Finora" width={150} height={50} className="finora-logo cursor-pointer" />
                </div>

                <ul>
                    {navitems.map((item, index) => {
                        const Icon = item.icon;
                        const active = isActive === item.label;
                        return (
                            // <li key={index} onClick={()=>setIsActive(item.label)} className="flex items-center gap-1 py-2 px-3">
                            <li key={index} onClick={() => setIsActive(item.label)} className={`text-xs flex items-center m-2 gap-1 py-2 px-3 font-nav cursor-pointer rounded-xl transition-all ease-out duration-200 ${active ? " text-white bg-[#8b5cf626] shadow-[inset_4px_0_2px_rgba(124,58,237,0.9),0_0_20px_rgba(124,58,237,1)]" : "text-[#7e889d] hover:text-white hover:bg-[#ffffff08]"}`}>
                                <Icon size={14} />
                                <span>{item.label}</span>
                            </li>
                        )
                    })}
                </ul>

                <div className="user mt-auto pt-5">
                    <div className="userinfo text-xs flex flex-col justify-center p-5">
                        <p>Bhagesh</p>
                        <p>personal Account</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;