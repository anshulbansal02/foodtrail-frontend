import "./sidebar.css";

import { useLocation, useNavigate } from "react-router-dom";

import {
    WarehouseRounded,
    UnarchiveRounded,
    CategoryRounded,
} from "@mui/icons-material";

function SideBarItem({ linkTo, icon, label, subLabel }) {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    return (
        <div
            className={`sidebar-item ${
                pathname.endsWith(linkTo) ? "active" : ""
            }`}
            onClick={() => navigate(linkTo)}
        >
            {icon}
            <div className="labels">
                <p className="sidebar-item-label">{label}</p>
                {subLabel ? (
                    <p className="sidebar-item-sublabel">{subLabel}</p>
                ) : null}
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <h3>Foodtrail</h3>
            </div>

            <div className="sidebar-items">
                <SideBarItem
                    linkTo="inventory"
                    icon={<WarehouseRounded />}
                    label="Inventory"
                    subLabel="Quantities in warehouse"
                />
                <SideBarItem
                    linkTo="orders"
                    icon={<UnarchiveRounded />}
                    label="Orders"
                    subLabel="Manage recent orders"
                />
                <SideBarItem
                    linkTo="products"
                    icon={<CategoryRounded />}
                    label="Products Catalog"
                />
            </div>
        </div>
    );
}
