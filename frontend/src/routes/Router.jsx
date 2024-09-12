import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Add from "../pages/Add";
import Home from "../pages/Home";
import Dashbard from "../pages/dashbo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    //   {
    //     path: "dashbard",
    //     element: <Dashbard />,
    //   },
      {
        path: "/add",
        element: <Add />,
      },
    ],
  },
]);
export default router;
