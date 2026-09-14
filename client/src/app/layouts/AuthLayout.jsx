import { Navigate, Outlet } from "react-router";
import Auth from "../../pages/Auth";
import { useEffect } from "react";
import { getCurrentUser } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const { userData, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userData) {
      getCurrentUser(dispatch);
    }
  }, [dispatch, userData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (userData) {
    return <Navigate to="/home" replace />;
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
