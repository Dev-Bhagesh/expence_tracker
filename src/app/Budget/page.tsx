import React from "react";
import BudgetHead from "../components/BudgetHead";
import BudgetProgressBar from "../components/BudgetProgressBar";
import BudgetCategory from "../components/BudgetCategory";

const Budget=()=>{
    return(
        <>
        <div className="Budget p-5">
            <div className="">
                <BudgetHead/>
            </div>
            <div className="progressBar mt-5">
                <BudgetProgressBar/>
            </div>
            <div className="BudgetCategory mt-10">
                <BudgetCategory/>
            </div>
        </div>
        </>
    )
}
export default Budget