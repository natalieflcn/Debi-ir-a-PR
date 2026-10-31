import { lazy } from "react";
import { Route } from "react-router-dom";
import RouteError from "../../errors/RouteError";

import { rootLoader } from "./loaders/utils/rootLoader";

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
const ForgotPassword = lazy(
  () => import("@/features/auth/pages/ForgotPassword"),
);
const ResetPassword = lazy(() => import("@/features/auth/pages/ResetPassword"));
const Unauthorized = lazy(() => import("@/errors/Unauthorized"));

const PublicRoutes = [
  {
    index: true,
    element: <HomePage />,
    loader: rootLoader,
  },
  { path: "how-it-works", element: <Workflow />, loader: rootLoader },
  { path: "about", element: <About />, loader: rootLoader },
  { path: "resources", element: <Resources />, loader: rootLoader },
  {
    path: "login",
    element: <Login />,
    loader: rootLoader,
  },
  {
    path: "signup/explorer",
    element: <ExplorerSignup />,
    loader: rootLoader,
  },
  {
    path: "signup/ambassador",
    element: <AmbassadorSignup />,
    loader: rootLoader,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "reset-password/:token",
    element: <ResetPassword />,
  },

  { path: "unauthorized", element: <Unauthorized /> },
];

export default PublicRoutes;
