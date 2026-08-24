import NavBar from "../components/navigation/NavBar";
import MainContent from "./MainContent";
import Footer from "../components/layout/Footer";
import Background from "../components/decorative/Background";
import { ResetLayout, StyledLayout } from "./layout.styles";
import ScrollToTop from "../components/ui/ScrollToTop";

const menuItems = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Explorations", link: "/explorations" },
  { label: "Profile", link: "/profile" },
];

function ExplorerLayout() {
  return (
    <ResetLayout>
      <ScrollToTop />
      <Background />
      <NavBar type="explorer" menuItems={menuItems} />
      <StyledLayout>
        <MainContent />
        <Footer />
      </StyledLayout>
    </ResetLayout>
  );
}

export default ExplorerLayout;
