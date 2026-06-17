import { createContext, useContext, useState } from "react";

const AmbassadorUIContext = createContext(null);

export function AmbassadorUIProvider({ children }) {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <AmbassadorUIContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </AmbassadorUIContext.Provider>
  );
}

export function useAmbassadorUI() {
  const context = useContext(AmbassadorUIContext);
  if (!context)
    throw new Error(
      "useAmbassadorUI must be used within AmbassadorUI Provider.",
    );
  return context;
}
