import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../App.jsx";
import "./index.css";
import Router from "./routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import NavBar from "../components/NavBar.jsx"

// import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const MainLayout = () => {
  return (
    <div>
      <NavBar/>
    </div>
  )
};

export default MainLayout;
