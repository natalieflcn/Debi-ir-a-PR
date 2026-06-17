import NavBar from "../components/navigation/NavBar";
import MainContent from "./MainContent";
import Footer from "../components/layout/Footer";
import { StyledLayout } from "./layout.styles";
import Background from "../components/decorative/Background";
import { AmbassadorUIProvider } from "../../features/ambassador/contexts/AmbassadorUIContext";

const menuItems = [
  { label: "Dashboard", link: "/ambassador/dashboard" },
  { label: "Explorations", link: "/ambassador/explorations" },
  { label: "Users", link: "/ambassador/users" },
  { label: "Profile", link: "/ambassador/profile" },
];

function AmbassadorLayout() {
  return (
    <AmbassadorUIProvider>
      <Background />
      <NavBar type="ambassador" menuItems={menuItems} />
      <StyledLayout>
        <MainContent />
        <Footer />
      </StyledLayout>
    </AmbassadorUIProvider>
  );
}

export default AmbassadorLayout;
