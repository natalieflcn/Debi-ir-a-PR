import { createBrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";

import ExplorerLayout from "../../shared/layouts/ExplorerLayout";
import AdminLayout from "../../shared/layouts/AdminLayout";
import PublicRoutes from "./PublicRoutes";
import ExplorerRoutes from "./ExplorerRoutes";
import AdminRoutes from "./AdminRoutes";
import { Suspense } from "react";
import SpinnerMini from "../../shared/components/ui/SpinnerMini";
import AmbassadorRoutes from "./AmbassadorRoutes";
import AmbassadorLayout from "../../shared/layouts/AmbassadorLayout";
import App from "../../App";
import PageNotFound from "../../pages/PageNotFound";
import ErrorPage from "../../pages/ErrorPage";

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
    errorElement: <ErrorPage />,
    children: [...PublicRoutes, { path: "*", element: <PageNotFound /> }],
  },
  {
    path: "/",
    element: <ExplorerLayout />,
    errorElement: <ErrorPage />,
    children: [...ExplorerRoutes, { path: "*", element: <PageNotFound /> }],
  },
  {
    path: "/ambassador",
    element: <AmbassadorLayout />,
    errorElement: <ErrorPage />,
    children: [...AmbassadorRoutes, { path: "*", element: <PageNotFound /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [...AdminRoutes, { path: "*", element: <PageNotFound /> }],
  },
]);

export default AppRouter;
