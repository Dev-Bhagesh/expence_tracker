"use client"
import React from "react";
import { useState, useEffect } from "react";
import { LayoutDashboard, CircleHelp, Info, ArrowLeftRight, Wallet, PiggyBank, BarChart, Repeat, Settings, icons } from "lucide-react";

const Sidebar = () => {

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
        <div className="w-[220px] p-5 ">
            <div className="mb-10 font-hero">
                Finora
            </div>

            <ul>
                {navitems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <li key={index} className="flex items-center gap-1 py-2 px-3">
                            <Icon />
                            <span>{item.label}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;