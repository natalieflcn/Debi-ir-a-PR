import { lazy } from "react";
import { redirect, Route } from "react-router-dom";

import { explorersLoader } from "./loaders/ambassador/explorersLoader";
import { profileLoader } from "./loaders/shared/profileLoader";
import { ambassadorDashboardLoader } from "./loaders/ambassador/ambassadorDashboardLoader";
import { adminExplorationLoader } from "./loaders/shared/adminExplorationLoader";
import { adminExplorationsLoader } from "./loaders/shared/adminExplorationsLoader";
import { adminLocationLoader } from "./loaders/shared/adminLocationLoader";
import { adminUserLoader } from "./loaders/shared/adminUserLoader";

const AmbassadorDashboard = lazy(
  () => import("@/features/ambassador/pages/dashboard/AmbassadorDashboard.jsx"),
);
const CreateExploration = lazy(
  () => import("@/features/ambassador/pages/explorations/CreateExploration"),
);
const CreateLocation = lazy(
  () => import("@/features/ambassador/pages/locations/CreateLocation"),
);

const ViewExploration = lazy(
  () => import("@/features/ambassador/pages/explorations/ViewExploration"),
);

const ViewLocation = lazy(
  () => import("@/features/ambassador/pages/locations/ViewLocation"),
);
const ManageExplorations = lazy(
  () => import("@/features/ambassador/pages/explorations/ManageExplorations"),
);
const AmbassadorProfile = lazy(
  () => import("@/features/ambassador/pages/profile/AmbassadorProfile"),
);
// const EditAmbassadorProfile = lazy(
//   () => import("@/features/ambassador/pages/profile/EditAmbassadorProfile"),
// );
const ManageExplorers = lazy(
  () => import("@/features/ambassador/pages/users/ManageExplorers"),
);
const ExplorerDetails = lazy(
  () => import("@/features/ambassador/pages/users/ExplorerDetails"),
);

const AmbassadorRoutes = [
  {
    index: true,
    loader: () => redirect("/ambassador/dashboard"),
  },
  {
    path: "dashboard",
    element: <AmbassadorDashboard />,
    loader: ambassadorDashboardLoader,
  },

  {
    path: "explorations",
    element: <ManageExplorations />,
    loader: adminExplorationsLoader,
  },
  { path: "explorations/create", element: <CreateExploration /> },
  {
    path: "explorations/:explorationId",
    element: <ViewExploration />,
    loader: adminExplorationLoader,
  },
  {
    path: "explorations/:explorationId/edit",
    element: <CreateExploration />,
    loader: adminExplorationLoader,
  },

  {
    path: "explorations/:explorationId/locations/:locationId",
    element: <ViewLocation />,
    loader: adminLocationLoader,
  },

  {
    path: "explorations/:explorationId/locations/:locationId/edit",
    element: <CreateLocation />,
    loader: adminLocationLoader,
  },

  { path: "users", element: <ManageExplorers />, loader: explorersLoader },
  {
    path: "users/:userId",
    element: <ExplorerDetails />,
    loader: adminUserLoader,
  },
  { path: "profile", element: <AmbassadorProfile /> },
];

export default AmbassadorRoutes;
