import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SendCode from "./pages/send_code/sendCode";
import ResetPassword from "./pages/reset_password/resetPassword";
import Products from "./pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path:'home',
            element:<Home />
        },
        {
            path:'products',
            element:<Products />
        },
        {
            path:'cart',
            element:<Cart />
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
        }
    ]
  },
]);
export default router;