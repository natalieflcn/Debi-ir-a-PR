import NavBar from "../components/navigation/NavBar";
import MainContent from "./MainContent";
import Footer from "../components/layout/Footer";

const menuItems = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Memories", link: "/memories" },
  { label: "Profile", link: "/profile" },
];

function ExplorerLayout() {
  return (
    <>
      Explorer Layout
      <NavBar type="explorer" menuItems={menuItems} />
      <MainContent />
      <Footer />
    </>
  );
}

export default ExplorerLayout;
