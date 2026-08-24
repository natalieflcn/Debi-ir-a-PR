import styled from "styled-components";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import RouterLink from "../routing/RouterLink";

const StyledUser = styled.div``;

function User() {
  const { isAuthenticated, user } = useAuth();

  return (
    <StyledUser>
      {isAuthenticated ? (
        <RouterLink to="/">
          <p>Logout</p>
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
