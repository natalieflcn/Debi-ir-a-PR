import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";
import styled from "styled-components";
import Background from "../elements/Background";

const StyledMainLayout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem 2rem 2rem;

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
