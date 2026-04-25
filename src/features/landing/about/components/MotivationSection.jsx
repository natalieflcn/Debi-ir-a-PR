import Row from "../../../../shared/components/layout/Row";

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
      " Debi ir a PR is inspired by my deep love for Puerto Rico, the island my father is from. I wanted to create something that celebrates its beauty while inviting others to participate in the same joy and connection I’ve been fortunate enough to experience.",
  },
  {
    id: 3,
    content:
      "The design draws inspiration from Bad Bunny’s album DTmF (Debí Tirar Más Fotos), blending the vibrant colors from Puerto Rico’s flag and the rich essence of its landscapes to capture the spirit of the island.",
  },
];

export default function MotivationSection() {
  return (
    <Row>
      {sectionItems.map((section) => (
        <Row key={section.id}>{section.content}</Row>
      ))}
    </Row>
  );
}
