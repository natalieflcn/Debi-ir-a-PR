import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";
import styled from "styled-components";
import Background from "../elements/Background";

const StyledMainLayout = styled.div`
  padding: 1rem 5rem 2rem;

  @media (max-width: 768px) {
    width: 85%;
    padding: 0rem 2rem 2rem;
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
