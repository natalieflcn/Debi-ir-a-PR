import { createContext, useContext, useState } from "react";
import { login } from "../../../services/auth";

const AuthContext = createContext(null);

const fakeCurrentUser = {
  id: "user_001",
  name: "Natalie Falcon",
  role: "explorer", // swap to "ambassador" or "admin" to test
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(fakeCurrentUser);

  async function loginUser(userData) {
    const credentials = await login(userData);
    setUser(userData);
    return credentials;
  }

  function logoutUser() {
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    role: user?.role ?? null,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an authProvider.");
  }

  return context;
}
