import { createBrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import PageNotFound from "../../shared/components/feedback/PageNotFound";
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
    children: [...PublicRoutes],
  },
  {
    path: "/",
    element: <ExplorerLayout />,
    children: [...ExplorerRoutes],
  },
  {
    path: "/ambassador",
    element: <AmbassadorLayout />,
    children: [...AmbassadorRoutes],
  },
]);

export default AppRouter;
