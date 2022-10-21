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
        path: "/login",
        element: <Login />,
        errorElement: <FourOhFour />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <FourOhFour />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductIdRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
  // </React.StrictMode>
);
