import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashbord from "../pages/dashboard";
import { FinancialRecordsProvider } from "../contexts/financial.contexts"; // นำเข้า provider

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // MainLayout
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: (
          <FinancialRecordsProvider> {/* ห่อหุ้ม Dashbord ด้วย FinancialRecordsProvider */}
            <Dashbord />
          </FinancialRecordsProvider>
        ),
      },
    ],
  },
]);

export default router;
