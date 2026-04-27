import MainContent from "./MainContent";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/layout/Footer";
import Background from "../components/decorative/Background";
import styled from "styled-components";

const StyledMainLayout = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1rem 2rem 2rem;
  z-index: 1;
  max-width: 1200px;

  @media (max-width: 798px) {
    /* margin: 1rem auto; */
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
    <>
      <Background />
      <NavBar type="main" menuItems={menuItems} />
      <StyledMainLayout>
        <MainContent />
        <Footer />
      </StyledMainLayout>
    </>
  );
}

export default MainLayout;
