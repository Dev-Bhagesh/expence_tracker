import Dashboardhead from "../components/DashboardHead"
import Balance from "../components/Balance"
export default function DashboardPage(){
    return(
        <main>
            <div className="p-5">
                <div className="mb-10">
                <Dashboardhead/>
                </div>
                <Balance/>
            </div>
        </main>
    )
}