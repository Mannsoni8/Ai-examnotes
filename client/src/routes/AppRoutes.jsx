import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Pricing from "../pages/Pricing";
import History from "../pages/History";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/home",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "notes",
          element: <Notes />,
        },
        {
          path: "history",
          element: <History />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
