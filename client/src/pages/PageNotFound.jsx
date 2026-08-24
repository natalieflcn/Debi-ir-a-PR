import styled from "styled-components";
import Image from "../shared/components/ui/Image";
import Heading from "../shared/components/typography/Heading";
import Button from "../shared/components/ui/Button";
import Row from "../shared/components/layout/Row";
import Background from "../shared/components/decorative/Background";
import { useAuth } from "../features/auth/contexts/AuthContext";
import RouterLink from "../shared/components/routing/RouterLink";

const Styled404 = styled.div`
  position: absolute;
  font-family: dtmf;
  font-size: 20rem;
  top: 14rem;
  opacity: 90%;
  text-shadow: 3px 3px var(--color-dark-200);
  z-index: -100;
`;

const StyledPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

function PageNotFound() {
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
    <>
      <Background />
      <StyledPageNotFound>
        <Heading as="h2" $shadowColor="var(--color-brown-400)">
          PaGE NoT FOuND
        </Heading>
        <Styled404>404</Styled404>
        <Image src="/src/assets/images/content/Concho.png" $width="20rem" />
        <Row $gap="var(--gap-lg)">
          <Heading as="h6">
            Perdón! The page you're looking for does not exist.
          </Heading>

          <RouterLink to={`/${userRedirect}`}>
            <Button $size="small" $variation="yellow">
              Back to Home
            </Button>
          </RouterLink>
        </Row>
      </StyledPageNotFound>
    </>
  );
}

export default PageNotFound;
