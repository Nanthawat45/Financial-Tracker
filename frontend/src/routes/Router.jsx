import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Dashbard from "";
const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"dashbard",
            element:<Dashbard/>
        }
    ]
}])