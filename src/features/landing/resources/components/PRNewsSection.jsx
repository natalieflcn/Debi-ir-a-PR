import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import Heading from "../../../../shared/components/typography/Heading";
import Link from "../../../../shared/components/ui/Link";
import Button from "../../../../shared/components/ui/Button";
import Card from "../../../../shared/components/layout/Card";

const StyledPRNewsSection = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 798px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
    }
  }
`;

export default function PRNewsSection({ theme }) {
  return (
    <StyledPRNewsSection theme={theme}>
      <Image
        src="src/assets/images/content/SanJuan.jpg"
        alt="Old San Juan buildings"
        $width="47%"
        $objectFit="cover"
        $borderRadius="var(--border-radius-sm)"
        $imageShadow={theme.imageShadow}
      />

      <Card $cardColor={theme.cardBackground} $cardShadow="insetLG">
        <Row>
          <Heading as="h6" $color="var(--color-brown-400)">
            Want to stay up to date about what’s going on in Puerto Rico?
          </Heading>
          <p>
            Keep up with the latest news, breaking stories, and more about the
            island.
          </p>
          <p>
            From cultural highlights and community efforts to political
            developments and ongoing challenges, staying informed helps us
            better understand Puerto Rico’s reality and support its people.
          </p>
          <Link href="https://www.the-independent.com/topic/puerto-rico">
            <Button $size="medium" $variation="treeLeaf">
              Visit Independent News
            </Button>
          </Link>
        </Row>
      </Card>
    </StyledPRNewsSection>
  );
}
