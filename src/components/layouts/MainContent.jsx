import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <main>
      <Outlet />
      footer
    </main>
  );
}

export default MainContent;
