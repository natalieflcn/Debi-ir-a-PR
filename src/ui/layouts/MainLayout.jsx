import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";
import styled from "styled-components";

const StyledMainLayout = styled.div`
  padding: 4rem 5rem 6rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem 3rem;
  }
`;

const menuItems = [
  { label: "Home", link: "/" },
  { label: "How It Works", link: "/how-it-works" },
  { label: "About", link: "/about" },
  { label: "Resources", link: "/resources" },
];

function MainLayout() {
  return (
    <StyledMainLayout>
      <NavBar type="main" menuItems={menuItems} />
      <MainContent />
      <Footer />
    </StyledMainLayout>
  );
}

export default MainLayout;
