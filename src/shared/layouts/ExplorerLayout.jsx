import NavBar from "../components/navigation/NavBar";
import MainContent from "./MainContent";
import Footer from "../components/layout/Footer";
import Background from "../components/decorative/Background";
import { StyledLayout } from "./layout.styles";

const menuItems = [
  { label: "Dashboard", link: "/explorer/dashboard" },
  { label: "Explorations", link: "/explorer/explorations" },
  { label: "Profile", link: "/explorer/profile" },
];

function ExplorerLayout() {
  return (
    <>
      <Background />
      <NavBar type="explorer" menuItems={menuItems} />
      <StyledLayout>
        <MainContent />
        <Footer />
      </StyledLayout>
    </>
  );
}

export default ExplorerLayout;
