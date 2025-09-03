import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";
import Footer from "../elements/Footer";

const menuItems = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Memories", link: "/memories" },
  { label: "Profile", link: "/profile" },
];

function ExplorerLayout() {
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
