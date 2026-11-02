import { lazy } from "react";
import { Route } from "react-router-dom";
import RouteError from "../../errors/RouteError";

import { rootLoader } from "./loaders/utils/rootLoader";
import PublicOnlyRoute from "./loaders/utils/PublicOnlyRoute";

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
    element: <PublicOnlyRoute />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "how-it-works", element: <Workflow /> },
      { path: "about", element: <About /> },
      { path: "resources", element: <Resources /> },
      { path: "login", element: <Login /> },
      { path: "signup/explorer", element: <ExplorerSignup /> },
      { path: "signup/ambassador", element: <AmbassadorSignup /> },
    ],
  },
  { path: "forgot-password", element: <ForgotPassword /> },
  { path: "reset-password/:token", element: <ResetPassword /> },
  { path: "unauthorized", element: <Unauthorized /> },
];

export default PublicRoutes;
