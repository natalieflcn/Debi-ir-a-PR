// admin dashboard, manage hunts, manage users

import { lazy } from "react";
import { Route } from "react-router-dom";

const AdminDashboard = lazy(
  () => import("@/features/admin/pages/dashboard/AdminDashboard.jsx"),
);
const CreateExploration = lazy(
  () => import("@/features/admin/pages/explorations/CreateExploration"),
);
const EditExplorationDetails = lazy(
  () => import("@/features/admin/pages/explorations/EditExplorationDetails"),
);
const EditExplorationItemDetails = lazy(
  () =>
    import("@/features/admin/pages/explorations/EditExplorationItemDetails"),
);
const ManageExplorations = lazy(
  () => import("@/features/admin/pages/explorations/ManageExplorations"),
);
const AdminProfile = lazy(
  () => import("@/features/admin/pages/profile/AdminProfile"),
);
const EditAdminProfile = lazy(
  () => import("@/features/admin/pages/profile/EditAdminProfile"),
);
const ManageUsers = lazy(
  () => import("@/features/admin/pages/users/ManageUsers"),
);
const AmbassadorDetails = lazy(
  () => import("@/features/admin/pages/users/AmbassadorDetails"),
);
const ExplorerDetails = lazy(
  () => import("@/features/admin/pages/users/ExplorerDetails"),
);
const ManageExplorers = lazy(
  () => import("@/features/admin/pages/users/ManageExplorers"),
);
const ManageAmbassadors = lazy(
  () => import("@/features/admin/pages/users/ManageAmbassadors"),
);

const AdminRoutes = (
  <>
    <Route index element={<AdminDashboard />} />

    <Route path="create" element={<CreateExploration />} />
    <Route
      path="exploration/:explorationId"
      element={<EditExplorationDetails />}
    />
    <Route
      path="exploration/:explorationId/explorationItemId"
      element={<EditExplorationItemDetails />}
    />
    <Route path="explorations" element={<ManageExplorations />} />

    <Route path="profile" element={<AdminProfile />} />
    {/* <Route path="editProfile" element={<EditAdminProfile />} /> */}

    <Route path="users" element={<ManageUsers />} />
    <Route path="ambassadors" element={<ManageAmbassadors />} />
    {<Route path="ambassadors/:ambassadorId" element={<AmbassadorDetails />} />}
    <Route path="explorers" element={<ManageExplorers />} />
    {<Route path="explorers/:explorerId" element={<ExplorerDetails />} />}
  </>
);

export default AdminRoutes;
