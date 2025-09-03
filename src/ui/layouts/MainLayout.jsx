import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";

function MainLayout() {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "How It Works", link: "/how-it-works" },
    { label: "About", link: "/about" },
    { label: "Resources", link: "/resources" },
  ];

  return (
    <div>
      <NavBar type="main" menuItems={menuItems} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainLayout;
