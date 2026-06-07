import { lazy } from "react";
import { Route } from "react-router-dom";
// import ViewExploration from "../../features/ambassador/pages/explorations/ViewExploration";

const AmbassadorDashboard = lazy(
  () => import("@/features/ambassador/pages/dashboard/AmbassadorDashboard.jsx"),
);
const CreateExploration = lazy(
  () => import("@/features/ambassador/pages/explorations/CreateExploration"),
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
  { path: "dashboard", element: <AmbassadorDashboard /> },
  { path: "explorations", element: <ManageExplorations /> },
  { path: "explorations/:explorationId", element: <ViewExploration /> },
  {
    path: "explorations/:explorationId/:explorationLocationId",
    element: <ViewLocation />,
  },
  { path: "users", element: <ManageExplorers /> },
  { path: "profile", element: <AmbassadorProfile /> },
  { path: "dashboard", element: <AmbassadorDashboard /> },
  { path: "create", element: <CreateExploration /> },
];

export default AmbassadorRoutes;
