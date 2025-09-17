import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";
import Background from "../elements/Background";

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
