import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";

function rolePrefix(user) {
  return user?.role === "admin"
    ? "/admin"
    : user?.role === "ambassador"
      ? "/ambassador"
      : "";
}

function ProtectedRoute({ allowedRoles }) {
  //   const { user } = useLoaderData();
  const { user, logoutUser } = useAuth();

  console.log("running protecedtoure");
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  let prefix = "/";

  if (user) {
    switch (user.role) {
      case "ambassador":
        prefix = "/ambassador";
        break;

      case "admin":
        prefix = "/admin";
        break;

      case "explorer":
      default:
        break;
    }
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={`${prefix}/unauthorized`} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
