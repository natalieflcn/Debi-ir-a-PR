import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppProviders from "./app/providers/AppProviders";
import AppRouter from "./app/router/AppRouter";
import { ThemeProvider } from "styled-components";

function App() {
  // const { user } = useContext(AuthContext);

  const currentTheme = {
    backgroundColor: "var(--color-red-200)",
    backgroundImage: "url(src/assets/images/ui/RedOverlay.png)",
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BrowserRouter>
        {/* <AppProviders> */}
        <AppRouter />
        {/* </AppProviders> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

//TODO add protected routes for staff and explorers

export default App;
