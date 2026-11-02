import { createContext, useContext, useEffect, useState } from "react";
import { getMe, login, logout } from "../../../services/auth";

import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isServerSleeping, setIsServerSleeping] = useState(true);

  const queryClient = useQueryClient();

  // Pings Render Server to wake up upon opening app
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Render Server Error. Server returned status: ${res.status}`,
          );
        }

        setIsServerSleeping(false);
      })
      .catch((err) => {
        console.error("Render Server ping failed:", err);
      });
  }, []);

  // Retrieves User if User is Logged in
  useEffect(() => {
    getMe()
      .then((data) => setUser(data.data.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  async function loginUser(credentials) {
    queryClient.clear();
    const { data } = await login(credentials);
    setUser(data.user);

    return data.user;
  }

  async function logoutUser() {
    await logout();
    queryClient.clear();
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
    isServerSleeping,
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
