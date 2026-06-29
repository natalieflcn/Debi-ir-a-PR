import { lazy } from "react";
import { redirect, Route } from "react-router-dom";
import fakeExplorationData from "../../features/explorer/pages/explorations/fakeExplorationData";
import fakeExplorationLocationData from "../../features/explorer/pages/explorations/fakeExplorationLocationData";
import { explorationsLoader } from "./loaders/explorationsLoader";
import { explorationLoader } from "./loaders/explorationLoader";
import { locationLoader } from "./loaders/locationLoader";
import { explorersLoader } from "./loaders/explorersLoader";
import { profileLoader } from "./loaders/profileLoader";
import { ambassadorDashboardLoader } from "./loaders/ambassadorDashboardLoader";
// import ViewExploration from "../../features/ambassador/pages/explorations/ViewExploration";

const AmbassadorDashboard = lazy(
  () => import("@/features/ambassador/pages/dashboard/AmbassadorDashboard.jsx"),
);
const CreateExploration = lazy(
  () => import("@/features/ambassador/pages/explorations/CreateExploration"),
);
const CreateLocation = lazy(
  () => import("@/features/ambassador/pages/explorations/CreateLocation"),
);

const ViewExploration = lazy(
  () => import("@/features/ambassador/pages/explorations/ViewExploration"),
);

const ViewLocation = lazy(
  () => import("@/features/ambassador/pages/explorations/ViewLocation"),
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
    loader: explorationsLoader,
  },
  { path: "explorations/create", element: <CreateExploration /> },
  {
    path: "explorations/:explorationId",
    element: <ViewExploration />,
    loader: explorationLoader,
  },
  {
    path: "explorations/:explorationId/edit",
    element: <CreateExploration exploration={fakeExplorationData} />,
    loader: explorationLoader,
  },

  {
    path: "explorations/:explorationId/locations/create",
    element: <CreateLocation />,
    loader: explorationLoader,
  },
  {
    path: "explorations/:explorationId/locations/:explorationLocationId",
    element: <ViewLocation />,
    loader: locationLoader,
  },

  {
    path: "explorations/:explorationId/locations/:locationId/edit",
    element: <CreateLocation location={fakeExplorationLocationData} />,
    loader: locationLoader,
  },

  { path: "users", element: <ManageExplorers />, loader: explorersLoader },
  {
    path: "users/:userId",
    element: <ExplorerDetails />,
    loader: profileLoader,
  },
  { path: "profile", element: <AmbassadorProfile />, loader: profileLoader },
];

export default AmbassadorRoutes;
