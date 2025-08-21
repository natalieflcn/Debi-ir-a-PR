import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";

function MainLayout() {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "How it Works", link: "/how-it-works" },
    { label: "About", link: "/about" },
    { label: "Resources", link: "/resources" },
  ];

  return (
    <div>
      <NavBar type="main" menuItems={menuItems} />
      Main Layout
      <MainContent />
    </div>
  );
}

export default MainLayout;
