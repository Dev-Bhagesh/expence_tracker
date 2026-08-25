"use client";

import React from "react";

const TransactionRow = ({ transaction }: any) => {
    return (
        <tr className="border border-t-white/[0.08] border-l-0 border-r-0 border-b-0 hover:bg-[#121027] duration-300 transition-all">
            <td className="p-0.5">{transaction.date}</td>

            <td className="p-0.5">{transaction.description}</td>

            <td className="p-0.5">{transaction.category}</td>

            <td className="p-0.5">{transaction.paymentMethod}</td>

            <td className="p-0.5">
                {transaction.amount < 0 ? "-" : "+"}
                ₹{Math.abs(transaction.amount).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                })}
            </td>

            <td className="p-0.5 text-center">
                ...
            </td>
        </tr>
    );
};

export default TransactionRow;