import React from "react";

const Dashboardhead = ()=>{
    const today = new Date();
    const currentDay = today.getDay();
    const month = new Date().getMonth();
    const date = new Date();

    const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
      ];

    const days = [
        "SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"
    ]
    return(
        <>
            <div className="head">
                <div className="block1">
                    <p className="text-slate-300 text-xs font-subhead">{days[currentDay]}, {months[month]} {date.getDate()}</p>
                    <p className="text-3xl font-hero font-bold">Hello Bhagesh</p>
                    <p className="text-xs text-slate-300 font-subhead">Here's your financial overview</p>
                </div>
                <div className="block2">
                </div>
            </div>
        </>
    )
}

export default Dashboardhead