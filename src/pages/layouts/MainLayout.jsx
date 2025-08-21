import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      Main Layout
      <Outlet />
    </div>
  );
}

export default MainLayout;
