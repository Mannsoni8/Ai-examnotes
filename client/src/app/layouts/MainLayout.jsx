import { Navigate, Outlet } from "react-router";
import Home from "../../pages/Home";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { userData } = useSelector((state) => state.user);

  if (!userData) {
    return <Navigate to="/" replace />;
  }

  if (userData) {
    return <Navigate to="/home" replace />;
  }
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
