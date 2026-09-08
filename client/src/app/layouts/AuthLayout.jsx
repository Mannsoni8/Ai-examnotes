import { Outlet } from "react-router";
import Auth from "../../pages/Auth";
import { useEffect } from "react";
import { getCurrentUser } from "../../services/api";
import { useDispatch } from "react-redux";

const AuthLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);
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
