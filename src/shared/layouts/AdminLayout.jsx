import NavBar from "../components/navigation/NavBar";
import MainContent from "./MainContent";
import Footer from "../components/layout/Footer";
import { StyledLayout } from "./layout.styles";
import Background from "../components/decorative/Background";

const menuItems = [
  { label: "Dashboard", link: "/admin/dashboard" },
  { label: "Explorations", link: "/admin/explorations" },
  { label: "Users", link: "/admin/users" },
  { label: "Profile", link: "/admin/profile" },
];

function AdminLayout() {
  return (
    <>
      <Background />
      <NavBar type="admin" menuItems={menuItems} />
      <StyledLayout>
        <MainContent />
        <Footer />
      </StyledLayout>
    </>
  );
}

export default AdminLayout;
