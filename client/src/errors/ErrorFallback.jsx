import styled from "styled-components";
import Background from "../shared/components/decorative/Background";
import Image from "../shared/components/ui/Image";
import Heading from "../shared/components/typography/Heading";
import Button from "../shared/components/ui/Button";

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

        <Button
          $size="small"
          $variation="secondary"
          onClick={resetErrorBoundary}
        >
          Try Again
        </Button>
      </StyledError>
    </>
  );
}

export default ErrorFallback;
