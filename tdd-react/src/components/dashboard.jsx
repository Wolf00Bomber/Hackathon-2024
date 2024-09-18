import React from "react";
import { DashboardData } from "../shared/mock-data";

const Dashboard = () => {
    const data = DashboardData;
    return (
        <div data-testid="dashboard-id">
            <h2>User List</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                    <td>{user.userName}</td>
                    <td>{user.phoneNo}</td>
                    <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        // <div data-testid="dashboard-id">
        //     <table>
        //         <tr>
        //             <th>User Name</th>
        //             <th>Email</th>
        //             <th>Contact</th>
        //         </tr>
        //         {
        //         data.map(rec => {
        //             return (
        //                 <tr>
        //                      <td key={rec.userId}>{rec.userName} - {rec.email} - {rec.phoneNo}</td>
        //                 </tr>
        //             )
        //         })
        //         }
        //     </table>
        // </div>
    )
}

export default Dashboard;