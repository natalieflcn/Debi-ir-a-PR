import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../ui/layouts/MainLayout";
import ExplorerLayout from "../ui/layouts/ExplorerLayout";
import AdminLayout from "../ui/layouts/AdminLayout";
import Workflow from "../features/guest/pages/Workflow";
import About from "../features/guest/pages/About";
import Resources from "../features/guest/pages/Resources";
import CreateAccount from "../features/guest/pages/CreateAccount";
import Login from "../features/guest/pages/Login";
import ExplorerProfile from "../features/explorer/pages/ExplorerProfile";
import Memories from "../features/explorer/pages/Memories";
import AdminDashboard from "../features/admin/pages/AdminDashboard";
import ManageUsers from "../features/admin/pages/ManageUsers";
import ManageHunts from "../features/admin/pages/ManageHunts";
import AdminProfile from "../features/admin/pages/AdminProfile";
import HomePage from "../features/guest/pages/HomePage";
import ExplorerDashboard from "../features/explorer/pages/ExplorerDashboard";
import CreateHunt from "../features/admin/pages/CreateHunt";
import PageNotFound from "../features/misc/PageNotFound";
import HuntDetails from "../features/explorer/pages/HuntDetails";
import HuntItemDetails from "../features/explorer/pages/HuntItemDetails";
import MemoryDetail from "../features/explorer/pages/MemoryDetail";
import UserDetails from "../features/admin/pages/UserDetails";
import EditHuntDetails from "../features/admin/pages/EditHuntDetails";
import EditHuntItemDetails from "../features/admin/pages/EditHuntItemDetails";
import GlobalStyles from "../styles/GlobalStyles";

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
