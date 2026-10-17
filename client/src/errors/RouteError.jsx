import styled from "styled-components";
import Image from "../shared/components/ui/Image";
import Heading from "../shared/components/typography/Heading";
import Button from "../shared/components/ui/Button";
import Row from "../shared/components/layout/Row";
import { useRevalidator, useRouteError } from "react-router-dom";
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

const ErrorWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 40rem;

  @media (max-width: 800rem) {
    width: 30rem;
  }

  @media (max-width: 500rem) {
    width: 19rem;
  }
`;

const StackRow = styled(Row)`
  flex-wrap: wrap;
  max-width: 90%;
  overflow-wrap: anywhere;
  min-width: 0;
`;

const ButtonsRow = styled(Row)`
  flex: 1;
  @media (max-width: 700rem) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;
function RouteError() {
  const error = useRouteError();
  const { revalidate, state } = useRevalidator();

  const { user } = useAuth();
  let userRedirect = "/";

  if (user) {
    switch (user.role) {
      case "explorer":
        userRedirect = "/dashboard";
        break;

      case "ambassador":
        userRedirect = "/ambassador";
        break;

      case "admin":
        userRedirect = "/admin";
        break;

      default:
        break;
    }
  }

  console.log(error);
  return (
    <ErrorWrapper>
      <Background />
      <StyledError>
        <Heading as="h2" $shadowColor="var(--color-brown-400)">
          SOMETHiNG WeNT WRoNG
        </Heading>

        <ImageContainer>
          <Image
            src="/src/assets/images/content/Chairs.svg"
            $width="100%"
            // $height="23rem"
          />
        </ImageContainer>
        <StyledParagraph>
          {error?.message || "An unexpected error occurred."}
        </StyledParagraph>

        <StackRow $gap="var(--gap-lg)" $align="center">
          {import.meta.env.DEV && error?.stack && (
            <pre
              style={{
                maxWidth: "90%",
                overflow: "auto",
                whiteSpace: "pre-wrap",
                textAlign: "left",
              }}
            >
              {error.stack}
            </pre>
          )}

          <Heading as="h6">Please refresh the page or try again later.</Heading>
          <ButtonsRow $direction="horizontal" $gap="var(--gap-lg)">
            <Button
              $size="small"
              $variation="secondary"
              onClick={() => revalidate()}
            >
              {state === "loading" ? "Trying Again..." : "Try Again"}
            </Button>

            <RouterLink to={`${userRedirect}`}>
              <Button $size="small" $variation="primary">
                Back to {user ? "Dashboard" : "Home"}
              </Button>
            </RouterLink>
          </ButtonsRow>
        </StackRow>
      </StyledError>
    </ErrorWrapper>
  );
}

export default RouteError;
