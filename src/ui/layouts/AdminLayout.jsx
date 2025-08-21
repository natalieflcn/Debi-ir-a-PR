import NavBar from "../../components/layouts/NavBar";
import MainContent from "../../components/layouts/MainContent";

function AdminLayout() {
  const menuItems = [
    { label: "Dashboard", link: "/admin" },
    { label: "Manage Hunts", link: "/admin/hunts" },
    { label: "Manage Users", link: "/admin/users" },
    { label: "Profile", link: "/admin/profile" },
  ];

  return (
    <div>
      Admin Layout
      <NavBar type="admin" menuItems={menuItems} />
      <MainContent />
    </div>
  );
}

export default AdminLayout;
