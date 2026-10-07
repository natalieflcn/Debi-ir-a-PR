import { redirect } from "react-router-dom";
import { getMe } from "../../../../services/auth.js";
import { useAuth } from "../../../../features/auth/contexts/AuthContext.jsx";

const ROLE_HOME = {
  explorer: "/dashboard",
  ambassador: "/ambassador/dashboard",
  admin: "/admin/dashboard",
};

export async function rootLoader() {
  // const { data } = await getMe();

  // try {
  //   const home = ROLE_HOME[data?.data?.role] || null;

  //   console.log(home);
  //   if (home) return redirect(home);
  // } catch (err) {
  //   // 401 / not logged in: fall through and show the landing page
  // }
  return null;
}
