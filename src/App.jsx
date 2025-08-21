import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./ui/layouts/MainLayout";
import ExplorerLayout from "./ui/layouts/ExplorerLayout";
import AdminLayout from "./ui/layouts/AdminLayout";
import Workflow from "./pages/guest/Workflow";
import About from "./pages/guest/About";
import Resources from "./pages/guest/Resources";
import CreateAccount from "./pages/guest/CreateAccount";
import Login from "./pages/guest/Login";
import ExplorerProfile from "./pages/explorer/ExplorerProfile";
import Memories from "./pages/explorer/Memories";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageHunts from "./pages/admin/ManageHunts";
import AdminProfile from "./pages/admin/AdminProfile";
import HomePage from "./pages/guest/HomePage";
import ExplorerDashboard from "./pages/explorer/ExplorerDashboard";
import CreateHunt from "./pages/admin/CreateHunt";
import PageNotFound from "./pages/other/PageNotFound";
import HuntDetails from "./pages/explorer/HuntDetails";
import HuntItemDetails from "./pages/explorer/HuntItemDetails";
import MemoryDetail from "./pages/explorer/MemoryDetail";
import UserDetails from "./pages/admin/UserDetails";
import EditHuntDetails from "./pages/admin/EditHuntDetails";
import EditHuntItemDetails from "./pages/admin/EditHuntItemDetails";
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
