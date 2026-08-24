import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import { useAuth } from "./features/auth/contexts/AuthContext";

const themeVariants = {
  blue: {
    backgroundColor: "var(--color-blue-200)",
    backgroundImage: "url(/src/assets/images/ui/BlueOverlay.png)",
    textShadow: "var(--text-shadow-offset-md) var(--color-blue-300)",
    hoverColor: "var(--color-red-200)",
  },
  red: {
    backgroundColor: "var(--color-red-200)",
    backgroundImage: "url(/src/assets/images/ui/RedOverlay.png)",
    textShadow: "var(--text-shadow-offset-md) var(--color-red-300)",
    hoverColor: "var(--color-blue-200)",
  },
};

function AppContent() {
  const { role } = useAuth();
  //   const role = "ambassador";
  const currentTheme =
    themeVariants[role === "ambassador" || role === "admin" ? "red" : "blue"];
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
}

export default AppContent;
