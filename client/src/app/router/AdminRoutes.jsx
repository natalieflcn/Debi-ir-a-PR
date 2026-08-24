// admin dashboard, manage hunts, manage users

import { lazy } from "react";
import { redirect, Route } from "react-router-dom";

import { adminDashboardLoader } from "./loaders/adminDashboardLoader";

import { adminExplorationsLoader } from "./loaders/adminExplorationsLoader";
import { adminExplorationLoader } from "./loaders/adminExplorationLoader";
import { adminLocationLoader } from "./loaders/adminLocationLoader";
import { usersLoader } from "./loaders/usersLoader";
import { profileLoader } from "./loaders/profileLoader";
import { adminUserLoader } from "./loaders/adminUserLoader";

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
  () => import("@/features/admin/pages/locations/ViewLocation"),
);
const CreateLocation = lazy(
  () => import("@/features/admin/pages/locations/CreateLocation"),
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
  {
    path: "dashboard",
    element: <AdminDashboard />,
    loader: adminDashboardLoader,
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
    path: "explorations/:explorationId/locations/create",
    element: <CreateLocation />,
    loader: adminExplorationLoader,
  },
  {
    path: "explorations/:explorationId/locations/:explorationLocationId",
    element: <ViewLocation />,
    loader: adminLocationLoader,
  },
  {
    path: "explorations/:explorationId/locations/:locationId/edit",
    element: <CreateLocation />,
    loader: adminLocationLoader,
  },
  {
    path: "users",
    element: <ManageUsers />,
    loader: usersLoader,
  },
  {
    path: "users/explorers/:userId",
    element: <ExplorerDetails />,
    loader: adminUserLoader,
  },
  {
    path: "users/ambassadors/:userId",
    element: <AmbassadorDetails />,
    loader: adminUserLoader,
  },
  { path: "profile", element: <AdminProfile />, loader: profileLoader },
];

export default AdminRoutes;
