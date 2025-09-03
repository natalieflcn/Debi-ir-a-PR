import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";

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
