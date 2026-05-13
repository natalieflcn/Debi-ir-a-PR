// admin dashboard, manage hunts, manage users

import { lazy } from "react";
import { Route } from "react-router-dom";

const AdminDashboard = lazy(
  () => import("@/features/admin/pages/dashboard/AdminDashboard.jsx"),
);
// const ManageExplorers = lazy(
//   () => import("@/features/admin/pages/users/ManageExplorers"),
// );
// const ManageAmbassadors = lazy(
//   () => import("@/features/admin/pages/users/ManageAmbassadors"),
// );
// const ExplorerDetails = lazy(
//   () => import("@/features/admin/pages/users/ExplorerDetails"),
// );
// const AmbassadorDetails = lazy(
//   () => import("@/features/admin/pages/users/AmbassadorDetails"),
// );
const ManageExplorations = lazy(
  () => import("@/features/admin/pages/explorations/ManageExplorations"),
);
const EditExplorationDetails = lazy(
  () => import("@/features/admin/pages/explorations/EditExplorationDetails"),
);
const EditExplorationItemDetails = lazy(
  () =>
    import("@/features/admin/pages/explorations/EditExplorationItemDetails"),
);
const CreateExploration = lazy(
  () => import("@/features/admin/pages/explorations/CreateExploration"),
);
const AdminProfile = lazy(
  () => import("@/features/admin/pages/profile/AdminProfile"),
);

const AdminRoutes = (
  <>
    <Route index element={<AdminDashboard />} />

    {/*<Route path="users" element={<ManageUsers />} />
     {<Route path="user/:userId" element={<UserDetails />} />} */}

    <Route path="explorations" element={<ManageExplorations />} />
    <Route
      path="exploration/:explorationId"
      element={<EditExplorationDetails />}
    />
    <Route
      path="exploration/:explorationId/explorationItemId"
      element={<EditExplorationItemDetails />}
    />
    <Route path="create" element={<CreateExploration />} />
    <Route path="profile" element={<AdminProfile />} />
  </>
);

export default AdminRoutes;
