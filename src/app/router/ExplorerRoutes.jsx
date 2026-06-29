// explorer dashboard, hunts, profile

import { lazy } from "react";
import { Route } from "react-router-dom";
import Explorations from "../../features/explorer/pages/explorations/Explorations";
import { explorationsLoader } from "./loaders/explorationsLoader";
import { explorationLoader } from "./loaders/explorationLoader";
import { locationLoader } from "./loaders/locationLoader";
import { profileLoader } from "./loaders/profileLoader";
import { explorerDashboardLoader } from "./loaders/explorerDashboardLoader";

const ExplorerDashboard = lazy(
  () => import("@/features/explorer/pages/dashboard/ExplorerDashboard.jsx"),
);
const Exploration = lazy(
  () => import("@/features/explorer/pages/explorations/Exploration"),
);
const ExplorationLocation = lazy(
  () => import("@/features/explorer/pages/explorations/ExplorationLocation"),
);
const ExplorerProfile = lazy(
  () => import("@/features/explorer/pages/profile/ExplorerProfile"),
);

const ExplorerRoutes = [
  {
    path: "dashboard",
    element: <ExplorerDashboard />,
    loader: explorerDashboardLoader,
  },
  {
    path: "explorations",
    element: <Explorations />,
    loader: explorationsLoader,
  },
  {
    path: "explorations/:explorationId",
    element: <Exploration />,
    loader: explorationLoader,
  },
  {
    path: "explorations/:explorationId/locations/:locationId",
    element: <ExplorationLocation />,
    loader: locationLoader,
  },
  { path: "profile", element: <ExplorerProfile />, loader: profileLoader },
];

export default ExplorerRoutes;
