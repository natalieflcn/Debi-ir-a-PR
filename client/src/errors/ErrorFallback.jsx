import styled from "styled-components";
import Background from "../shared/components/decorative/Background";
import Image from "../shared/components/ui/Image";
import Heading from "../shared/components/typography/Heading";
import Button from "../shared/components/ui/Button";
import Row from "../shared/components/layout/Row";
import { useAuth } from "../features/auth/contexts/AuthContext";
import RouterLink from "../shared/components/routing/RouterLink";

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

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log(error);

  const { user } = useAuth();
  let userRedirect = "/";

  if (user) {
    switch (user.role) {
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
        break;
    }
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

        <Row $direction="horizontal" $gap="var(--gap-lg)">
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

          <Button
            $size="small"
            $variation="secondary"
            onClick={() => resetErrorBoundary}
          >
            Try Again
          </Button>

          <RouterLink to={`${userRedirect}`}>
            <Button $size="small" $variation="primary">
              Back to {user ? "Dashboard" : "Home"}
            </Button>
          </RouterLink>
        </Row>
      </StyledError>
    </>
  );
}

export default ErrorFallback;
