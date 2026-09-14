import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { userData } = useSelector((state) => state.user);

  if (!userData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;