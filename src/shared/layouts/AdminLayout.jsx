import NavBar from "../components/navigation/NavBar";
import MainContent from "./MainContent";
import Footer from "../components/layout/Footer";

const menuItems = [
  { label: "Dashboard", link: "/admin" },
  { label: "Manage Hunts", link: "/admin/hunts" },
  { label: "Manage Users", link: "/admin/users" },
  { label: "Profile", link: "/admin/profile" },
];

function AdminLayout() {
  return (
    <div>
      Admin Layout
      <NavBar type="admin" menuItems={menuItems} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default AdminLayout;
