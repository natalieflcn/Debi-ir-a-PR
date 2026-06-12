// landing, login, create account

import { lazy } from "react";
import { Route } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";

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
  { index: true, element: <HomePage /> },
  { path: "how-it-works", element: <Workflow /> },
  { path: "about", element: <About /> },
  { path: "resources", element: <Resources /> },
  { path: "create-account", element: <Resources /> },
  { path: "login", element: <Login /> },
  { path: "signup/explorer", element: <ExplorerSignup /> },
  { path: "signup/ambassador", element: <AmbassadorSignup /> },
  { path: "error", element: <ErrorPage /> },
];

export default PublicRoutes;
