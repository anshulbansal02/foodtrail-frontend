import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@routes/views";

const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Foodtrail</h1>
                <p>Trace origins of a food product</p>
            </div>
        ),
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "products",
                element: <h2>Products List</h2>,
            },
            {
                path: "inventory",
                element: <h2>Inventory</h2>,
            },
            {
                path: "orders",
                element: <h2>Orders</h2>,
            },
        ],
    },
]);

export default rootRouter;
