import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import ExplorerLayout from "./shared/layouts/ExplorerLayout";
import AdminLayout from "./shared/layouts/AdminLayout";
import Workflow from "./features/landing/workflow/page/Workflow";
import About from "./features/landing/about/page/About";

import CreateAccount from "./features/auth/components/CreateAccount";
import Login from "./features/auth/components/Login";
import ExplorerProfile from "./features/explorer/pages/ExplorerProfile";

import AdminDashboard from "./features/admin/dashboard/AdminDashboard";
import ManageUsers from "./features/admin/userManagement/ManageUsers";
import ManageExplorations from "./features/admin/explorationManagement/ManageExplorations";
import AdminProfile from "./features/admin/profile/AdminProfile";
import HomePage from "./features/landing/home/page/HomePage";
import ExplorerDashboard from "./features/explorer/pages/ExplorerDashboard";
import CreateExploration from "./features/admin/explorationManagement/CreateExploration";
import PageNotFound from "./shared/components/feedback/PageNotFound";
import ExplorationDetails from "./features/explorer/pages/ExplorationDetails";
import ExplorationItemDetails from "./features/explorer/pages/ExplorationItemDetails";

import UserDetails from "./features/admin/userManagement/UserDetails";
import EditExplorationDetails from "./features/admin/explorationManagement/EditExplorationDetails";
import EditExplorationItemDetails from "./features/admin/explorationManagement/EditExplorationItemDetails";
import GlobalStyles from "./styles/GlobalStyles";
import Resources from "./features/landing/resources/page/Resources";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="how-it-works" element={<Workflow />} />
            <Route path="about" element={<About />} />
            <Route path="resources" element={<Resources />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route element={<ExplorerLayout />}>
            <Route path="dashboard" element={<ExplorerDashboard />} />
            <Route
              path="exploration/:explorationId"
              element={<ExplorationDetails />}
            />
            <Route
              path="exploration/:explorationId/:explorationItemId"
              element={<ExplorationItemDetails />}
            />
            <Route path="profile" element={<ExplorerProfile />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="user/:userId" element={<UserDetails />} />
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
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//TODO add protected routes for staff and explorers

export default App;
