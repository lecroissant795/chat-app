import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";


// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth", 
      element: <MainLayout/>, 
      children: [
        {element: < LoginPage />, path: "login"},
        {element: < ResgisterPage />, path: "register"},
        {element: < ForgotPasswordPage />, path: "forgot-password"},
        {element: < NewPasswordPage />, path: "new-password"},


        ]
    },
{
  path: "/",
    element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "profile", element: <ProfilePage /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
{ path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings")),
);
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const ResgisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ForgotPasswordPage = Loadable(lazy(() => import("../pages/auth/ForgotPassword")));
const NewPasswordPage = Loadable(lazy(() => import("../pages/auth/NewPassword")));
const ProfilePage = Loadable(lazy(() => import("../pages/dashboard/Profile")));


const Page404 = Loadable(lazy(() => import("../pages/Page404")));
