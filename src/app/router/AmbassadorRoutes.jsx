import { lazy } from "react";
import { redirect, Route } from "react-router-dom";
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
  { path: "dashboard", element: <AmbassadorDashboard /> },

  { path: "explorations", element: <ManageExplorations /> },
  { path: "explorations/create", element: <CreateExploration /> },
  { path: "explorations/:explorationId", element: <ViewExploration /> },
  {
    path: "explorations/:explorationId/edit",
    element: <CreateExploration exploration={true} />,
  },

  {
    path: "explorations/:explorationId/locations/create",
    element: <CreateLocation />,
  },
  {
    path: "explorations/:explorationId/locations/:explorationLocationId",
    element: <ViewLocation />,
  },

  {
    path: "explorations/:explorationId/locations/:locationId/edit",
    element: <CreateLocation location={true} />,
  },

  { path: "users", element: <ManageExplorers /> },
  { path: "users/:userId", element: <ExplorerDetails /> },
  { path: "profile", element: <AmbassadorProfile /> },
];

export default AmbassadorRoutes;
