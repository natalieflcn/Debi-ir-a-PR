import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";

function ProtectedRoute({ allowedRoles }) {
  //   const { user } = useLoaderData();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.userType)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
