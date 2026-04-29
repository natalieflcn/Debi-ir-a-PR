import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";

const sectionItems = [
  {
    id: "explorers",
    heading: "Explorer",
    items: [
      {
        id: 0,
        content:
          "Embark on unique scavenger hunts across Puerto Rico, discovering hidden gems and cultural treasures.",
      },
      {
        id: 1,
        content:
          "Collect badges as you hit milestones, turning each journey into a rewarding adventure.",
      },
      {
        id: 2,
        content:
          "Share your experiences directly on social media to inspire others to explore.",
      },
    ],
  },
  {
    id: "ambassadors",
    heading: "Ambassador",
    items: [
      {
        id: 0,
        content:
          "Design and launch engaging scavenger hunts to guide explorers through meaningful experiences.",
      },
      {
        id: 1,
        content:
          "Highlight and promote local businesses, cultural landmarks, and favorite hidden spots.",
      },
    ],
  },
];

export default function KeyFeaturesSection() {
  return (
    <Row $direction="horizontal" $gap="var(--row-gap-lg)">
      {sectionItems.map((section) => (
        <Card key={section.id} $gap="var(--row-gap-sm)" $cardShadow="outsetSM">
          <Heading key={section.id}>As an {section.heading}</Heading>

          {section.items.map((item) => (
            <Row key={item.id}>{item.content}</Row>
          ))}
        </Card>
      ))}
    </Row>
  );
}
