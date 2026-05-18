import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";
import Image from "../../../../shared/components/ui/Image";
import styled from "styled-components";

const sectionItems = [
  {
    id: "main-tech-stack",
    heading: "Main Technology Stack",
    items: [
      {
        id: 0,
        content: "React",
        logo: "src/assets/images/content/ReactLogo.png",
      },
      {
        id: 1,
        content: "Node.js",
        logo: "src/assets/images/content/NodeJSLogo.png",
      },
      {
        id: 2,
        content: "Express",
        logo: "src/assets/images/content/ExpressLogo.png",
      },
      {
        id: 3,
        content: "MongoDB",
        logo: "src/assets/images/content/MongoDBLogo.svg",
      },
    ],
  },
  {
    id: "third-party",
    heading: "Third Party Libraries and Services",
    items: [
      { id: 0, content: "React Router" },
      { id: 1, content: "React Icons" },
      { id: 2, content: "Mongoose" },
    ],
  },
  {
    id: "architecture",
    heading: "Architecture and Engineering Focus",
    items: [
      { id: 0, content: "MVC System Architecture" },
      {
        id: 1,
        content:
          "Google Maps API Integration (Interactive Map, Dynamic Markers, InfoWindows, event handling)",
      },
      { id: 2, content: "Modular code structure" },
      { id: 3, content: "Feature-driven file structure" },
    ],
  },
];

const StyledTechStackSection = styled(Row)`
  @media (max-width: 1000px) {
    h4 {
      font-size: var(--font-size-md);
    }
  }

  @media (max-width: 450px) {
    h4 {
      font-size: var(--font-size-xs);
      line-height: var(--line-height-md);
    }
  }
`;
export default function TechStackSection() {
  return (
    <StyledTechStackSection>
      <Row>
        <Heading as="h4" $color="var(--color-red-300)">
          {sectionItems[0].heading}
        </Heading>

        <Row
          $direction="horizontal"
          $wrap="wrap"
          $align="space-evenly"
          $gap="var(--gap-md)"
        >
          {sectionItems[0].items.map((item) => (
            <Card
              key={item.id}
              $cardColor="var(--color-light-0)"
              $cardShadow="outsetSM"
              $gap="var(--gap-sm)"
              $align="center"
            >
              <Image src={item.logo} $width="4.4rem" $height="5rem" />
              <Bold $color="var(--color-dark-200)">{item.content}</Bold>
            </Card>
          ))}
        </Row>

        {sectionItems.slice(1).map((section) => (
          <Row key={section.id}>
            <Heading as="h4" $color="var(--color-red-300)">
              {section.heading}
            </Heading>
            <Card $cardColor="var(--color-light-0)">
              <Row $gap="var(--gap-md)">
                {section.items.map((item) => (
                  <Row
                    key={item.id}
                    $direction="horizontal"
                    $align="flex-start"
                    $gap="var(--gap-md)"
                  >
                    <Image src="src/assets/images/ui/PRSun.png" $width="25px" />
                    {item.content}
                  </Row>
                ))}
              </Row>
            </Card>
          </Row>
        ))}
      </Row>
    </StyledTechStackSection>
  );
}
