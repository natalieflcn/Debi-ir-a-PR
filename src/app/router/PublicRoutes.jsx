// landing, login, create account

import { lazy } from "react";
import { Route } from "react-router-dom";

import Login from "../../features/auth/components/Login";
import CreateAccount from "../../features/auth/components/CreateAccount";

const HomePage = lazy(() => import("@/features/landing/home/page/HomePage"));
const Workflow = lazy(
  () => import("@/features/landing/workflow/page/Workflow"),
);
const About = lazy(() => import("@/features/landing/about/page/About"));
const Resources = lazy(
  () => import("@/features/landing/resources/page/Resources"),
);

const PublicRoutes = [
  { index: true, element: <HomePage /> },
  { path: "how-it-works", element: <Workflow /> },
  { path: "about", element: <About /> },
  { path: "resources", element: <Resources /> },
  { path: "create-account", element: <Resources /> },
  { index: "login", element: <Login /> },
];

export default PublicRoutes;
