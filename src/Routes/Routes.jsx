import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";
import ErrorComponent from "../Components/ErrorComponent";
import CoffeeCards from "../Components/CoffeeCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

export default routes;
