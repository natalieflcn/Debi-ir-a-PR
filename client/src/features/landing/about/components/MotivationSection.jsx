import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";

const sectionItems = [
  {
    id: 0,
    content:
      "I set out to solidify the skills I’ve been developing on my journey to becoming a full-stack developer, and I couldn’t think of a better way to hone my skills than by building something dedicated to the island I love.",
  },
  {
    id: 1,
    content:
      "This project challenged me to bring together front-end design, back-end logic, and user experience into one cohesive product. It allowed me to move beyond tutorials and coding exercises, pushing me to apply my newfound knowledge in a real-world context while experimenting with creativity, problem-solving, and scalability.",
  },
  {
    id: 2,
    content:
      "Debi ir a PR is inspired by my deep love for Puerto Rico, the island my father is from.",
  },
  {
    id: 3,
    content:
      "I wanted to create something that celebrates its beauty while inviting others to participate in the same joy and connection I’ve been fortunate enough to experience.",
  },
  {
    id: 4,
    content:
      "The design draws inspiration from Bad Bunny’s album DTmF (Debí Tirar Más Fotos), blending the vibrant colors from Puerto Rico’s flag and the rich essence of its landscapes to capture the spirit of the island.",
  },
];

const StyledInspoSection = styled.div`
  @media (max-width: 600px) {
    div {
      flex-direction: column;
    }
  }
`;

export default function MotivationSection() {
  return (
    <Row>
      <Card $cardColor="var(--color-light-0)" $gap="var(--gap-md)">
        <Row>{sectionItems[0].content} </Row>
        <Row>{sectionItems[1].content}</Row>
      </Card>

      <StyledInspoSection>
        <Card $cardColor="var(--color-light-0)">
          <Row $direction="horizontal" $gap="var(--gap-md)">
            <Image src="src/assets/images/content/TEMP.png" $width="40%" />
            <Row $gap="var(--gap-md)">
              <Row>{sectionItems[2].content}</Row>
              <Row>{sectionItems[3].content}</Row>
            </Row>
          </Row>
        </Card>
      </StyledInspoSection>

      <Card $cardColor="var(--color-light-0)">
        {sectionItems[4].content}
        <Row $align="center">
          <Image src="src/assets/images/content/TEMP.png" $width="40%" />{" "}
        </Row>
      </Card>
    </Row>
  );
}
