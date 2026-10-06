import { createBrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";

import ExplorerLayout from "../../shared/layouts/ExplorerLayout";
import AdminLayout from "../../shared/layouts/AdminLayout";
import PublicRoutes from "./PublicRoutes";
import ExplorerRoutes from "./ExplorerRoutes";
import AdminRoutes from "./AdminRoutes";
import { Suspense } from "react";
import Spinner from "../../shared/components/ui/Spinner";
import AmbassadorRoutes from "./AmbassadorRoutes";
import AmbassadorLayout from "../../shared/layouts/AmbassadorLayout";
import App from "../../App";
import PageNotFound from "../../errors/PageNotFound";
import RouteError from "../../errors/RouteError";
import ProtectedRoute from "./ProtectedRoute";

// function AppRouter() {
//   return (
//     <Suspense fallback={<SpinnerMini />}>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           {PublicRoutes}
//         </Route>

//         {/* {Add Protected Route wrapping around this later} */}
//         <Route element={<ExplorerLayout />}>{ExplorerRoutes}</Route>

//         <Route path="ambassador" element={<AmbassadorLayout />}>
//           {AmbassadorRoutes}
//         </Route>

//         {/* {Add Protected Route wrapping around this later} */}
//         <Route path="admin" element={<AdminLayout />}>
//           {AdminRoutes}
//         </Route>

//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </Suspense>
//   );
// }

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        children: [...PublicRoutes],
        errorElement: <RouteError />,
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/",
    element: <ExplorerLayout />,

    children: [
      {
        element: <ProtectedRoute allowedRoles={["explorer"]} />,
        errorElement: <RouteError />,
        children: [...ExplorerRoutes],
      },
    ],
  },
  {
    path: "/ambassador",
    element: <AmbassadorLayout />,

    children: [
      {
        element: <ProtectedRoute allowedRoles={["ambassador"]} />,
        errorElement: <RouteError />,
        children: [...AmbassadorRoutes],
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,

    children: [
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        errorElement: <RouteError />,
        children: [...AdminRoutes],
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default AppRouter;
