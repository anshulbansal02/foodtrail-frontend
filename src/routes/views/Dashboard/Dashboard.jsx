import "./dashboard.css";

import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="dashboard">
            Dashboard
            <Outlet />
        </div>
    );
}
