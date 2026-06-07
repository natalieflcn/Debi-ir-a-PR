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

const AmbassadorRoutes = (
  <>
    <Route path="dashboard" element={<AmbassadorDashboard />} />

    <Route path="explorations" element={<ManageExplorations />} />

    <Route path="explorations/:explorationId" element={<ViewExploration />} />

    <Route
      path="explorations/:explorationId/:explorationItemId"
      element={<ViewLocation />}
    />

    <Route path="users" element={<ManageExplorers />} />

    <Route path="profile" element={<AmbassadorProfile />} />

    {/* FIX ROUTES BELOW */}

    <Route path="create" element={<CreateExploration />} />

    {/* <Route
      path="exploration/:explorationId"
      element={<EditExplorationDetails />}
    /> */}

    <Route path="explorations" element={<ManageExplorations />} />

    <Route path="profile" element={<AmbassadorProfile />} />
    {/* <Route path="editProfile" element={<EditAmbassadorProfile />} /> */}

    <Route path="users" element={<ManageExplorers />} />

    {<Route path="explorers/:explorerId" element={<ExplorerDetails />} />}
  </>
);

export default AmbassadorRoutes;
