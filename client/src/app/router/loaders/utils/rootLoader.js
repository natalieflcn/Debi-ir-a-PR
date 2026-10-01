import { redirect } from "react-router-dom";
import { getMe } from "../../../../services/auth.js";

const ROLE_HOME = {
  explorer: "/dashboard",
  ambassador: "/ambassador/dashboard",
  admin: "/admin/dashboard",
};

export async function rootLoader() {
  try {
    const { data } = await getMe();
    const home = ROLE_HOME[data.user.role];
    if (home) return redirect(home);
  } catch {
    // 401 / not logged in: fall through and show the landing page
  }
  return null;
}
