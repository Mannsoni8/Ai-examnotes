import { Outlet } from "react-router";
import Home from "../../pages/Home";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Home />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
