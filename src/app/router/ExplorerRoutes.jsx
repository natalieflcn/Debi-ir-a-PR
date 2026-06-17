// explorer dashboard, hunts, profile

import { lazy } from "react";
import { Route } from "react-router-dom";
import Explorations from "../../features/explorer/pages/explorations/Explorations";

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
  { path: "dashboard", element: <ExplorerDashboard /> },
  { path: "explorations", element: <Explorations /> },
  { path: "explorations/:explorationId", element: <Exploration /> },
  {
    path: "explorations/:explorationId/locations/:locationId",
    element: <ExplorationLocation />,
  },
  { path: "profile", element: <ExplorerProfile /> },
];

export default ExplorerRoutes;
