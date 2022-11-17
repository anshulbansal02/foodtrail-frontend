import "./dashboard.css";

import { Outlet, useLocation } from "react-router-dom";
import { Avatar, Badge, Tooltip, IconButton, Breadcrumbs } from "@mui/material";
import { NotificationsRounded, NavigateNext } from "@mui/icons-material";

import { GuardedView } from "@components";
import Sidebar from "./Sidebar";

function useBreadcrumbs() {
    let { pathname } = useLocation();
    const crumbs = pathname.split("/").filter((crumb) => crumb !== "");
    return crumbs;
}

export default function Dashboard() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <GuardedView>
            <div className="dashboard">
                <Sidebar />
                <div className="dashboard-content">
                    <div className="header">
                        <Breadcrumbs
                            separator={<NavigateNext fontSize="medium" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs.map((crumb) => (
                                <h3 className="header-crumb" key={crumb}>
                                    {crumb}
                                </h3>
                            ))}
                        </Breadcrumbs>

                        <div className="right-actions">
                            <Tooltip title="Notifications">
                                <IconButton>
                                    <Badge badgeContent={4} color="primary">
                                        <NotificationsRounded
                                            sx={{ fontSize: 24 }}
                                            color="action"
                                        />
                                    </Badge>
                                </IconButton>
                            </Tooltip>

                            <Avatar
                                alt="Avatar"
                                src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
                                sx={{
                                    width: 48,
                                    height: 48,
                                    backgroundColor: "#fff",
                                }}
                            />
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </GuardedView>
    );
}
