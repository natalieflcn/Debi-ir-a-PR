import styled from "styled-components";
import Image from "../shared/components/ui/Image";
import Heading from "../shared/components/typography/Heading";
import Button from "../shared/components/ui/Button";
import Row from "../shared/components/layout/Row";
import { useRouteError } from "react-router-dom";
import RouterLink from "../shared/components/routing/RouterLink";
import Background from "../shared/components/decorative/Background";
import { useAuth } from "../features/auth/contexts/AuthContext";

const Styled404 = styled.div`
  position: absolute;
  font-family: dtmf;
  font-size: 20rem;
  top: 14rem;
  opacity: 90%;
  text-shadow: 3px 3px var(--color-dark-200);
  z-index: -100;
`;

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  gap: var(--gap-sm);
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;
  font-weight: var(--font-weight-medium);
`;
function ErrorPage() {
  const error = useRouteError();

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
      <StyledError>
        <Heading as="h2" $shadowColor="var(--color-brown-400)">
          SOMETHiNG WeNT WRoNG
        </Heading>

        <Image
          src="/src/assets/images/content/Chairs.svg"
          $width="40rem"
          $height="23rem"
        />
        <StyledParagraph>
          {error?.message || "An unexpected error occurred."}
        </StyledParagraph>
        <Row $gap="var(--gap-lg)" $align="center">
          <Heading as="h6">Please refresh the page or try again later.</Heading>
          <Row $direction="horizontal" $gap="var(--gap-lg)">
            <Button
              $size="small"
              $variation="secondary"
              onClick={() => window.location.reload()}
            >
              Refresh the Page
            </Button>
            <RouterLink to={`/${userRedirect}`}>
              <Button $size="small" $variation="primary">
                Back to Home
              </Button>
            </RouterLink>
          </Row>
        </Row>
      </StyledError>
    </>
  );
}

export default ErrorPage;
