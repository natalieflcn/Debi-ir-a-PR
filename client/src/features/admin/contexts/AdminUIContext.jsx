import { createContext, useContext, useState } from "react";

const AdminUIContext = createContext(null);

export function AdminUIProvider({ children }) {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <AdminUIContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </AdminUIContext.Provider>
  );
}

export function useAdminUI() {
  const context = useContext(AdminUIContext);
  if (!context)
    throw new Error("useAdminUI must be used within AdminUI Provider.");
  return context;
}
