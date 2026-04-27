import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import Heading from "../../../../shared/components/typography/Heading";
import Link from "../../../../shared/components/ui/Link";
import Button from "../../../../shared/components/ui/Button";

const StyledPRNewsSection = styled.div`
  display: flex;
  gap: 1.5rem;

  img {
    width: 47%;
    border-radius: var(--border-radius-sm);
  }

  h6 {
    color: var(--color-red-400);
  }

  @media (max-width: 798px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
    }
  }
`;

export default function PRNewsSection() {
  return (
    <StyledPRNewsSection>
      <Image
        src="src/assets/images/content/SanJuan.jpg"
        alt="Old San Juan buildings"
      />
      <Row>
        <Heading as="h6">
          Want to stay up to date about what’s going on in Puerto Rico?
        </Heading>
        <p>
          Keep up with the latest news, breaking stories, and more about the
          island.
        </p>
        <p>
          From cultural highlights and community efforts to political
          developments and ongoing challenges, staying informed helps us better
          understand Puerto Rico’s reality and support its people.
        </p>
        <Link href="https://www.the-independent.com/topic/puerto-rico">
          <Button $size="large" $variation="secondary">
            Visit Independent News
          </Button>
        </Link>
      </Row>
    </StyledPRNewsSection>
  );
}
