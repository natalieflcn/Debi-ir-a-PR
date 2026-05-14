import { Route, Routes } from "react-router-dom";
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

function AppRouter() {
  return (
    <Suspense fallback={<SpinnerMini />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {PublicRoutes}
        </Route>

        {/* {Add Protected Route wrapping around this later} */}
        <Route element={<ExplorerLayout />}>{ExplorerRoutes}</Route>

        <Route path="ambassador" element={<AdminLayout />}>
          {AmbassadorRoutes}
        </Route>

        {/* {Add Protected Route wrapping around this later} */}
        <Route path="admin" element={<AdminLayout />}>
          {AdminRoutes}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
