// admin dashboard, manage hunts, manage users

import { lazy } from "react";
import { redirect, Route } from "react-router-dom";

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

const AdminRoutes = [
  {
    index: true,
    loader: () => redirect("/admin/dashboard"),
  },
  { path: "dashboard", element: <AdminDashboard /> },
  { path: "explorations", element: <ManageExplorations /> },
  {
    path: "explorations/:explorationId",
    element: <ViewExploration />,
  },
  { path: "explorations/create-exploration", element: <CreateExploration /> },
  {
    path: "explorations/edit-exploration/:explorationId",
    element: <CreateExploration />,
  },
  { path: "profile", element: <AdminProfile /> },
  { path: "explorations/create-location", element: <CreateLocation /> },
  {
    path: "explorations/edit-location/:locationId",
    element: <CreateLocation />,
  },

  {
    path: "explorations/:explorationId/:explorationLocationId",
    element: <ViewLocation />,
  },
  {
    path: "users",
    element: <ManageUsers />,
  },
  {
    path: "users/explorers/:explorerId",
    element: <ExplorerDetails />,
  },
  {
    path: "users/ambassadors/:ambassadorId",
    element: <AmbassadorDetails />,
  },
];

export default AdminRoutes;
