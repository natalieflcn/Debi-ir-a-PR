import styled from "styled-components";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import RouterLink from "../routing/RouterLink";
import { useNavigate } from "react-router-dom";

const StyledUser = styled.div``;

function User() {
  const { isAuthenticated, loading, user, logoutUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogoutUser() {
    await logoutUser();
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 10);
  }

  return (
    <StyledUser>
      {!loading && isAuthenticated ? (
        <RouterLink to="/">
          <p onClick={handleLogoutUser}>Logout</p>
        </RouterLink>
      ) : (
        <RouterLink to="/login">
          <p>Login</p>
        </RouterLink>
      )}
    </StyledUser>
  );
}

export default User;
