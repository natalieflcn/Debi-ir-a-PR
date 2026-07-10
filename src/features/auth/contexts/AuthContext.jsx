import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const fakeCurrentUser = {
  id: "user_001",
  name: "Natalie Falcon",
  userType: "explorer", // swap to "ambassador" or "admin" to test
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(fakeCurrentUser);

  function login(userData) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    role: user?.role ?? null,
    login,
    logout,
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
