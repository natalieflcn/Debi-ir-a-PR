import { AuthProvider } from "./features/auth/contexts/AuthContext";
import AppContent from "./AppContent";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

//TODO add protected routes for staff and explorers

export default App;
