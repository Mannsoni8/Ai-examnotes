import { Navigate, Outlet } from "react-router";
import Auth from "../../pages/Auth";
import { useEffect } from "react";
import { getCurrentUser } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";

const AuthLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const { userData } = useSelector((state) => state.user);

  if (userData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <div>
        <Auth />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
