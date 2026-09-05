import { Outlet } from "react-router";
import Auth from "../../pages/Auth";

const AuthLayout = () => {
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
