// admin dashboard, manage hunts, manage users

import { lazy } from "react";
import { Route } from "react-router-dom";

const AdminDashboard = lazy(
  () => import("@/features/admin/pages/dashboard/AdminDashboard.jsx"),
);
const CreateExploration = lazy(
  () => import("@/features/admin/pages/explorations/CreateExploration"),
);
const ViewExploration = lazy(
  () => import("@/features/admin/pages/explorations/ViewExploration"),
);
const ViewLocation = lazy(
  () => import("@/features/admin/pages/explorations/ViewLocation"),
);
const CreateLocation = lazy(
  () => import("@/features/admin/pages/explorations/CreateLocation"),
);
const ManageExplorations = lazy(
  () => import("@/features/admin/pages/explorations/ManageExplorations"),
);
const AdminProfile = lazy(
  () => import("@/features/admin/pages/profile/AdminProfile"),
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

const AdminRoutes = [
  { path: "dashboard", element: <AdminDashboard /> },
  { path: "explorations", element: <ManageExplorations /> },
  {
    path: "explorations/:explorationId",
    element: <ViewExploration />,
  },
  { path: "create-exploration", element: <CreateExploration /> },
  { path: "profile", element: <AdminProfile /> },
  { path: "create-location", element: <CreateLocation /> },
  {
    path: "explorations/:explorationId/:explorationLocationId",
    element: <ViewLocation />,
  },
];

const AdminRoutes2 = (
  <>
    <Route index element={<AdminDashboard />} />

    <Route path="create" element={<CreateExploration />} />

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
