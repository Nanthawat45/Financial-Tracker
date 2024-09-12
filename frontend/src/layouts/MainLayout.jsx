import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
