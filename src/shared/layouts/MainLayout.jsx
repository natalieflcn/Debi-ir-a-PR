import MainContent from "./MainContent";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/layout/Footer";
import Background from "../components/decorative/Background";
import { StyledLayout } from "./layout.styles";
import ScrollToTop from "../components/ui/ScrollToTop";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "How It Works", link: "/how-it-works" },
  { label: "About", link: "/about" },
  { label: "Resources", link: "/resources" },
];

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Background />
      <NavBar type="main" menuItems={menuItems} />
      <StyledLayout>
        <MainContent />
        <Footer />
      </StyledLayout>
    </>
  );
}

export default MainLayout;
