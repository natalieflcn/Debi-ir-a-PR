import NavBar from "../navbar/NavBar";
import MainContent from "./MainContent";
import Footer from "../../shared/components/Footer";
import Background from "../../shared/components/Background";

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
