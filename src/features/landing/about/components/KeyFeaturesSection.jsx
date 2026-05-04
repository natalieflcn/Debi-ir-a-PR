import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";

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
    buttonLink: "",
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
    buttonLink: "",
  },
];

export default function KeyFeaturesSection() {
  return (
    <Row $direction="horizontal" $gap="var(--gap-lg)">
      {sectionItems.map((section) => (
        <Card
          key={section.id}
          $gap="var(--gap-md)"
          $cardShadow="outsetMD"
          $cardColor={section.cardColor}
        >
          <Row $gap="var(--gap-sm)">
            <Heading as="h3" $color="var(--color-light-0)">
              As an
            </Heading>
            <Heading as="h3" $color="var(--color-light-0)">
              {section.heading.toUpperCase()}
            </Heading>
          </Row>

          {section.items.map((item) => (
            <Row key={item.id}>{item.content}</Row>
          ))}

          <Button $size="medium" $variation={section.buttonVariation}>
            {section.buttonText}
          </Button>
        </Card>
      ))}
    </Row>
  );
}
