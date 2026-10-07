import { createContext, useContext, useEffect, useState } from "react";
import { getMe, login, logout } from "../../../services/auth";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then((data) => setUser(data.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  async function loginUser(credentials) {
    const { data } = await login(credentials);

    setUser(data.user);

    return data.user;
  }

  async function logoutUser() {
    await logout();

    setUser(null);
  }

  function clearUser() {
    setUser(null);
  }

  async function registerUser(userData) {
    setUser(userData.data.user);
    return userData.data.user;
  }

  function updateUser(userData) {
    setUser(userData);
  }

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    role: user?.role ?? null,
    loginUser,
    logoutUser,
    registerUser,
    clearUser,
    updateUser,
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
