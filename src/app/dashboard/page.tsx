import Dashboardhead from "../components/DashboardHead"
import Balance from "../components/Balance"
import Infobar from "../components/Infobar"
export default function DashboardPage(){
    return(
        <main>
            <div className="p-5">
                <div className="mb-10">
                <Dashboardhead/>
                </div>
                <div>

                <Balance/>
                </div>
                <div className="mt-2">

                <Infobar/>
                </div>
            </div>
        </main>
    )
}