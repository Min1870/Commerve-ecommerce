import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout";
import Home from "../pages/HomePage.tsx";
import Cart from "../pages/CartPage.tsx";
import About from "../pages/AboutPage.tsx";
import Products from "../pages/ProductsPage.tsx";
import Error from "../pages/ErrorPage.tsx";
import Checkout from "../pages/CheckoutPage.tsx";
import SingleProduct from "../pages/SingleProductPage.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
// import PrivateRoute from "./PrivateRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
