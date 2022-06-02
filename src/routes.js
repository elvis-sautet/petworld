import { Navigate } from "react-router-dom";
import ProductEnquiry from "./components/_product/ProductEnquiry";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Cart from "./pages/Cart";
import Feed from "./pages/Feed";
import HomeLayout from "./pages/home/HomeLayout";
import NotFound from "./pages/notfound/NotFound";

const routes = () => [
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "/home",
        element: <Navigate to="/home/feed" />,
      },
      {
        path: "/home/product/:id",
        element: <ProductEnquiry />,
      },
      // cart page
      {
        path: "/home/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "404",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

export default routes;
