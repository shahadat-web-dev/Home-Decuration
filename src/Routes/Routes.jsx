import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErroePage from "../Pages/ErroePage";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErroePage></ErroePage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("./data.json")
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
      }

    ]
  },

  // {
  //     path: '*' ,
  //     element: <ErroePage></ErroePage>    
  // }

]);

export default router

