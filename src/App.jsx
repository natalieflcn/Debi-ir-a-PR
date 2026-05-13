import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppProviders from "./app/providers/AppProviders";
import AppRouter from "./app/router/AppRouter";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        {/* <AppProviders> */}
        <AppRouter />
        {/* </AppProviders> */}
      </BrowserRouter>
    </>
  );
}

//TODO add protected routes for staff and explorers

export default App;
