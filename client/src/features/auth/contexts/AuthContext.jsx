import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../../../services/auth";
import { apiFetch } from "../../../shared/services/apiFetch";

const AuthContext = createContext(null);

const fakeCurrentUser = {
  id: "user_001",
  name: "Natalie Falcon",
  role: "explorer", // swap to "ambassador" or "admin" to test
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/users/me")
      .then((data) => setUser(data.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  async function loginUser(credentials) {
    const { data } = await login(credentials);

    setUser(data.user);

  
    return data.user;
  }

  function logoutUser() {
    setUser(null);
  }

  async function registerUser(userData) {
    setUser(userData.data.user);
    return userData.data.user;
  }

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    role: user?.role ?? null,
    loginUser,
    logoutUser,
    registerUser,
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
