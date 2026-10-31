import { redirect } from "react-router-dom";
import { getMe } from "../../../../services/auth.js";
import { useAuth } from "../../../../features/auth/contexts/AuthContext.jsx";

const ROLE_HOME = {
  explorer: "/dashboard",
  ambassador: "/ambassador/dashboard",
  admin: "/admin/dashboard",
};

export async function rootLoader() {
  try {
    const res = await getMe();
    const home = ROLE_HOME[res?.data?.data?.role];
    if (home) return redirect(home);
  } catch {
    // 401 or network error: not logged in, show the public page
  }
  return null;
}
