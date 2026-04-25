import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";

const sectionItems = [
  {
    id: "main-tech-stack",
    heading: "Main Technology Stack",
    items: [
      { id: 0, content: "React" },
      { id: 1, content: "Node.js" },
      { id: 2, content: "Express" },
      { id: 3, content: "MongoDB" },
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

export default function TechStackSection() {
  return (
    <Row>
      <Heading>{sectionItems[0].heading}</Heading>
      <Row $direction="horizontal">
        {sectionItems[0].items.map((item) => (
          <Card key={item.id}>{item.content}</Card>
        ))}
      </Row>

      {sectionItems.slice(1).map((section) => (
        <Row key={section.id}>
          <Heading>{section.heading}</Heading>
          <Card>
            {section.items.map((item) => (
              <Row key={item.id}>{item.content}</Row>
            ))}
          </Card>
        </Row>
      ))}
    </Row>
  );
}
