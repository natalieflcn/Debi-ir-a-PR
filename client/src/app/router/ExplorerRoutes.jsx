// explorer dashboard, hunts, profile

import { lazy } from "react";
import { redirect, Route } from "react-router-dom";
import Explorations from "../../features/explorer/pages/explorations/Explorations";
import { explorerExplorationsLoader } from "./loaders/explorer/explorerExplorationsLoader";
import { explorerExplorationLoader } from "./loaders/explorer/explorerExplorationLoader";
import { explorerLocationLoader } from "./loaders/explorer/explorerLocationLoader";
import { profileLoader } from "./loaders/shared/profileLoader";
import { explorerDashboardLoader } from "./loaders/explorer/explorerDashboardLoader";

const ExplorerDashboard = lazy(
  () => import("@/features/explorer/pages/dashboard/ExplorerDashboard.jsx"),
);
const Exploration = lazy(
  () => import("@/features/explorer/pages/explorations/Exploration"),
);
const ExplorationLocation = lazy(
  () => import("@/features/explorer/pages/locations/ExplorationLocation"),
);
const ExplorerProfile = lazy(
  () => import("@/features/explorer/pages/profile/ExplorerProfile"),
);
const Unauthorized = lazy(() => import("@/errors/Unauthorized"));

const ExplorerRoutes = [
  {
    index: true,
    loader: () => redirect("/dashboard"),
  },
  {
    path: "dashboard",
    element: <ExplorerDashboard />,
    loader: explorerDashboardLoader,
  },
  {
    path: "explorations",
    element: <Explorations />,
    loader: explorerExplorationsLoader,
  },
  {
    path: "explorations/:explorationId",
    element: <Exploration />,
    loader: explorerExplorationLoader,
  },
  {
    path: "explorations/:explorationId/locations/:locationId",
    element: <ExplorationLocation />,
    loader: explorerLocationLoader,
  },
  { path: "profile", element: <ExplorerProfile />, loader: profileLoader },
  { path: "unauthorized", element: <Unauthorized /> },
];

export default ExplorerRoutes;
