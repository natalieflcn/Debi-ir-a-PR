// explorer dashboard, hunts, profile

import { lazy } from "react";
import { Route } from "react-router-dom";
import Explorations from "../../features/explorer/pages/explorations/Explorations";

const ExplorerDashboard = lazy(
  () => import("@/features/explorer/pages/dashboard/ExplorerDashboard.jsx"),
);
const ExplorationDetails = lazy(
  () => import("@/features/explorer/pages/explorations/ExplorationDetails"),
);
const ExplorationItemDetails = lazy(
  () => import("@/features/explorer/pages/explorations/ExplorationItemDetails"),
);
const ExplorerProfile = lazy(
  () => import("@/features/explorer/pages/profile/ExplorerProfile"),
);

const ExplorerRoutes = (
  <>
    <Route path="dashboard" element={<ExplorerDashboard />} />
    <Route path="explorations" element={<Explorations />} />

    <Route path="exploration/:explorationId" element={<ExplorationDetails />} />
    <Route
      path="exploration/:explorationId/:explorationItemId"
      element={<ExplorationItemDetails />}
    />
    <Route path="profile" element={<ExplorerProfile />} />
  </>
);

export default ExplorerRoutes;
