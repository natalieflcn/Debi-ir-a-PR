import NavBar from "../navbar/NavBar";
import MainContent from "../../components/layouts/MainContent";

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
    </div>
  );
}

export default ExplorerLayout;
