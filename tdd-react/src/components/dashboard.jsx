import React from "react";
import { DashboardData } from "../shared/mock-data";

const Dashboard = () => {
    const data = DashboardData;
    return (
        <div data-testid="dashboard-id">
            {
                data.map(rec => {
                    return <td>{rec.userId} - {rec.title}</td>
                })
                
            }
        </div>
    )
}

export default Dashboard;