import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";
import ErrorComponent from "../Components/ErrorComponent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
