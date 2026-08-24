import styled from "styled-components";
import { useAuth } from "../features/auth/contexts/AuthContext";
import RouterLink from "../shared/components/routing/RouterLink";
import Heading from "../shared/components/typography/Heading";
import Button from "../shared/components/ui/Button";
import Bold from "../shared/components/typography/Bold";
import Image from "../shared/components/ui/Image";

const StyledUnauthorized = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-lg);
  margin-bottom: 1rem;
`;

function Unauthorized() {
  const { user } = useAuth();
  let userRedirect;

  switch (user.userType) {
    case "explorer":
      userRedirect = "dashboard";
      break;

    case "ambassador":
      userRedirect = "ambassador";
      break;

    case "admin":
      userRedirect = "admin";
      break;

    default:
      userRedirect = "";
      break;
  }

  return (
    <StyledUnauthorized>
      <Heading as="h2" $shadowColor="var(--color-dark-100)">
        ACCeSS RESTRiCTED
      </Heading>
      <Bold $color="var(--color-light-0)">
        Sorry, you don't have access to this page.
      </Bold>
      <Image src="/src/assets/images/content/PRDoor.png" $width="20rem" />
      <RouterLink to={`/${userRedirect}`}>
        <Button $size="small" $variation="yellow">
          Back to Home
        </Button>
      </RouterLink>
    </StyledUnauthorized>
  );
}

export default Unauthorized;
