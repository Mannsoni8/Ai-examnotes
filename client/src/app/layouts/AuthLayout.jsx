import { Outlet } from "react-router";
import Auth from "../../pages/Auth";
import { useEffect } from "react";
import { getCurrentUser } from "../../services/api";

const AuthLayout = () => {
  useEffect(()=>{
    getCurrentUser()
  },[])
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
