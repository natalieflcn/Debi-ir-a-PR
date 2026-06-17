import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import styled from "styled-components";
import RouterLink from "../../../../shared/components/routing/RouterLink";

const sectionItems = [
  {
    id: "explorers",
    heading: "Explorer",
    cardColor: "var(--color-blue-200)",
    items: [
      {
        id: 0,
        content:
          "Embark on scavenger hunts across Puerto Rico, discovering hidden gems and cultural treasures.",
      },
      {
        id: 1,
        content:
          "Collect badges as you hit milestones, turning each journey into a rewarding adventure.",
      },
    ],
    buttonText: "Become an Explorer",
    buttonVariation: "darkBlue",
    buttonLink: "/signup/explorer",
  },
  {
    id: "ambassadors",
    heading: "Ambassador",
    cardColor: "var(--color-red-200)",
    items: [
      {
        id: 0,
        content:
          "Design and launch engaging scavenger hunts to guide Explorers through meaningful experiences.",
      },
      {
        id: 1,
        content:
          "Highlight and promote local businesses, cultural landmarks, beautiful landscapes, and favorite hidden spots.",
      },
    ],
    buttonText: "Become an Ambassador",
    buttonVariation: "darkRed",
    buttonLink: "/signup/ambassador",
  },
];

const StyledHeading = styled(Heading)`
  @media (max-width: 1000px) {
    font-size: var(--font-size-lg);
  }
`;

const StyledRow = styled(Row)`
  @media (max-width: 1000px) {
    gap: var(--gap-xs);
  }
`;

const StyledKeyFeatures = styled(Row)`
  display: flex;
  flex-direction: row;
  gap: var(--gap-xl);

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default function KeyFeaturesSection() {
  return (
    <StyledKeyFeatures>
      {sectionItems.map((section) => (
        <Card
          key={section.id}
          $gap="var(--gap-md)"
          $cardShadow="outsetMD"
          $cardColor={section.cardColor}
        >
          <StyledRow $gap="var(--gap-sm)">
            <StyledHeading as="h3" $color="var(--color-light-0)">
              As an
            </StyledHeading>
            <StyledHeading as="h3" $color="var(--color-light-0)">
              {section.heading.toUpperCase()}
            </StyledHeading>
          </StyledRow>

          {section.items.map((item) => (
            <Row key={item.id}>{item.content}</Row>
          ))}

          <RouterLink to={section.buttonLink}>
            <Button $size="medium" $variation={section.buttonVariation}>
              {section.buttonText}
            </Button>
          </RouterLink>
        </Card>
      ))}
    </StyledKeyFeatures>
  );
}
