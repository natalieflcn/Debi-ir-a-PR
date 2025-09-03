import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";

function ExplorerLayout() {
  const menuItems = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Memories", link: "/memories" },
    { label: "Profile", link: "/profile" },
  ];

  return (
    <div>
      Explorer Layout
      <NavBar type="explorer" menuItems={menuItems} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default ExplorerLayout;
