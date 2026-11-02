import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../../features/auth/contexts/AuthContext";

const ROLE_HOME = {
  explorer: "/dashboard",
  ambassador: "/ambassador/dashboard",
  admin: "/admin/dashboard",
};

function PublicOnlyRoute() {
  const { user, role } = useAuth();

  if (user && ROLE_HOME[role]) {
    return <Navigate to={ROLE_HOME[role]} replace />;
  }

  return <Outlet />;
}

export default PublicOnlyRoute;
