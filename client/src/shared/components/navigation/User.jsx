import styled from "styled-components";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import RouterLink from "../routing/RouterLink";
import { useNavigate } from "react-router-dom";

const StyledUser = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function User() {
  const { isAuthenticated, loading, user, logoutUser, clearUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogoutUser() {
    // clearUser();
    await logoutUser();
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 10);
  }

  return (
    <StyledUser>
      {!loading && isAuthenticated ? (
        <p onClick={handleLogoutUser}>Logout</p>
      ) : (
        <RouterLink to="/login">
          <p>Login</p>
        </RouterLink>
      )}
    </StyledUser>
  );
}

export default User;
