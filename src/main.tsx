import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import Layout from "./component/layout";
import { Home, ProductIdRoute, Products } from "./routes";
import { FourOhFour } from "./routes/404";
import Login from "./routes/login";
import Register from "./routes/register";
import Checkout from "./routes/checkout";
import { Transaction } from "./routes/transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <FourOhFour />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductIdRoute />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/transaksi",
        element: <Transaction />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <FourOhFour />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <FourOhFour />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
  // </React.StrictMode>
);
