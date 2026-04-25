import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import ExplorerLayout from "./shared/layouts/ExplorerLayout";
import AdminLayout from "./shared/layouts/AdminLayout";
import Workflow from "./features/landing/workflow/Workflow";
import About from "./features/landing/about/page/About";
import Resources from "./features/landing/resources/Resources";
import CreateAccount from "./features/auth/components/CreateAccount";
import Login from "./features/auth/components/Login";
import ExplorerProfile from "./features/explorer/pages/ExplorerProfile";
import Memories from "./features/explorer/pages/Memories";
import AdminDashboard from "./features/admin/dashboard/AdminDashboard";
import ManageUsers from "./features/admin/userManagement/ManageUsers";
import ManageHunts from "./features/admin/explorationManagement/ManageHunts";
import AdminProfile from "./features/admin/profile/AdminProfile";
import HomePage from "./features/landing/home/HomePage";
import ExplorerDashboard from "./features/explorer/pages/ExplorerDashboard";
import CreateHunt from "./features/admin/explorationManagement/CreateHunt";
import PageNotFound from "./shared/components/feedback/PageNotFound";
import HuntDetails from "./features/explorer/pages/HuntDetails";
import HuntItemDetails from "./features/explorer/pages/HuntItemDetails";
import MemoryDetail from "./features/explorer/pages/MemoryDetail";
import UserDetails from "./features/admin/userManagement/UserDetails";
import EditHuntDetails from "./features/admin/explorationManagement/EditHuntDetails";
import EditHuntItemDetails from "./features/admin/explorationManagement/EditHuntItemDetails";
import GlobalStyles from "./styles/GlobalStyles";

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
            <Route path="hunt/:huntId" element={<HuntDetails />} />
            <Route
              path="hunt/:huntId/:huntItemId"
              element={<HuntItemDetails />}
            />
            <Route path="profile" element={<ExplorerProfile />} />
            <Route path="memories" element={<Memories />} />
            <Route path="memories/:huntId" element={<MemoryDetail />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="user/:userId" element={<UserDetails />} />
            <Route path="hunts" element={<ManageHunts />} />
            <Route path="hunt/:huntId" element={<EditHuntDetails />} />
            <Route
              path="hunt/:huntId/huntItemId"
              element={<EditHuntItemDetails />}
            />
            <Route path="create" element={<CreateHunt />} />
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
