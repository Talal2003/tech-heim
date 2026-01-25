import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/cart/Checkout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SendCode from "./pages/send_code/SendCode";
import ResetPassword from "./pages/reset_password/ResetPassword";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/product_details/ProductDetails";
import ProtectedRouter from "./ProtectedRouter"
import AccountLayout from "./pages/account/AccountLayout";
import AccountPersonalData from "./pages/account/AccountPersonalData";
import AccountOrders from "./pages/account/AccountOrders";
import AccountPaymentInstalments from "./pages/account/AccountPaymentInstalments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            index:true,
            element:<Home />
        },
        {
            path:'products',
            element:<Products />
        },
        {
            path:'cart',
            element:
            <ProtectedRouter>
                <Cart />
            </ProtectedRouter>
        },
        {
            path:'checkout',
            element:
            <ProtectedRouter>
                <Checkout />
            </ProtectedRouter>
        },
        {
            path:'account',
            element:<AccountLayout />,
            children:[
                {
                    index:true,
                    element:<AccountPersonalData />
                },
                {
                    path:'payment-instalments',
                    element:<AccountPaymentInstalments />
                },
                {
                    path:'orders',
                    element:<AccountOrders />
                }
            ]
        },
        {
            path:'login',
            element:<Login />
        },
        {
            path:'register',
            element:<Register />
        },
        {
            path:'send-code',
            element:<SendCode />
        },
        {
            path:'reset-password',
            element:<ResetPassword />
        },
        {
            path:'product/:id',
            element:<ProductDetails />
        },
    ]
  },
]);
export default router;