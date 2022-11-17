import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@routes/views";
import Inventory from "./views/Inventory/Inventory";
import Orders from "./views/Orders/Orders";
import ProductList from "./views/ProductsList/ProductsList";
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
                element: <ProductList/>,
            },
            {
                path: "inventory",
                element: <Inventory/>,
            },
            {
                path: "orders",
                element: <Orders/>,
            },
        ],
    },
    {
        path: "/signin",
        element: <h2>Sign In</h2>,
    },
    {
        path: "/register",
        element: <h2>Register</h2>,
    },
]);

export default rootRouter;
