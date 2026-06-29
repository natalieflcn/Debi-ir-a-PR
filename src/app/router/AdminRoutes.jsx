// admin dashboard, manage hunts, manage users

import { lazy } from "react";
import { redirect, Route } from "react-router-dom";
import fakeExplorationData from "../../features/explorer/pages/explorations/fakeExplorationData";
import fakeExplorationLocationData from "../../features/explorer/pages/explorations/fakeExplorationLocationData";
import { adminDashboardLoader } from "./loaders/adminDashboardLoader";
import { explorationsLoader } from "./loaders/explorationsLoader";
import { explorationLoader } from "./loaders/explorationLoader";
import { locationLoader } from "./loaders/locationLoader";
import { usersLoader } from "./loaders/usersLoader";
import { profileLoader } from "./loaders/profileLoader";

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
  {
    path: "dashboard",
    element: <AdminDashboard />,
    loader: adminDashboardLoader,
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
  {
    path: "users",
    element: <ManageUsers />,
    loader: usersLoader,
  },
  {
    path: "users/explorers/:explorerId",
    element: <ExplorerDetails />,
    loader: profileLoader,
  },
  {
    path: "users/ambassadors/:ambassadorId",
    element: <AmbassadorDetails />,
    loader: profileLoader,
  },

  { path: "profile", element: <AdminProfile />, loader: profileLoader },
];

export default AdminRoutes;
