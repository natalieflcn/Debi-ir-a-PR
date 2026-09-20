// landing, login, create account

import { lazy } from "react";
import { Route } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Unauthorized from "../../pages/Unauthorized";
import { rootLoader } from "./loaders/rootLoader";
// import signupLoader from "./loaders/signupLoader";

const HomePage = lazy(() => import("@/features/landing/home/page/HomePage"));
const Workflow = lazy(
  () => import("@/features/landing/workflow/page/Workflow"),
);
const About = lazy(() => import("@/features/landing/about/page/About"));
const Resources = lazy(
  () => import("@/features/landing/resources/page/Resources"),
);
const Login = lazy(() => import("@/features/auth/pages/Login"));
const ExplorerSignup = lazy(
  () => import("@/features/auth/pages/ExplorerSignup"),
);
const AmbassadorSignup = lazy(
  () => import("@/features/auth/pages/AmbassadorSignup"),
);

const PublicRoutes = [
  { index: true, element: <HomePage />, loader: rootLoader },
  { path: "how-it-works", element: <Workflow /> },
  { path: "about", element: <About /> },
  { path: "resources", element: <Resources /> },
  { path: "create-account", element: <Resources /> },
  {
    path: "login",
    element: <Login />,
    //  loader: loginLoader
  },
  {
    path: "signup/explorer",
    element: <ExplorerSignup />,
    // loader: signupLoader,
  },
  {
    path: "signup/ambassador",
    element: <AmbassadorSignup />,
    // loader: signupLoader,
  },
  { path: "error", element: <ErrorPage /> },
  { path: "/unauthorized", element: <Unauthorized /> },
];

export default PublicRoutes;

// { path: "profile", element: <ExplorerProfile />, loader: profileLoader },
