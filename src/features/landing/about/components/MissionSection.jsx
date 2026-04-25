import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";

const sectionItems = [
  {
    id: "for-puerto-rico",
    heading: "For Puerto Rico",
    body: "Debí ir a PR is a gamified scavenger hunt app designed to help people discover the hidden gems of Puerto Rico. Whether you’re a visitor seeking inspiration on where to go or a local wanting a fresh way to experience the island, the app transforms exploration into an adventure.",
  },
  {
    id: "for-tourists",
    heading: "For Tourists",
    body: "By turning tourism into a game, it highlights overlooked destinations—beyond the usual beaches and resorts—encouraging users to create lasting memories through cultural landmarks, small businesses, and natural wonders.",
  },
  {
    id: "for-puerto-ricans",
    heading: "For Puerto Ricans",
    body: " The app also empowers a team to continue designing and uploading more scavenger hunts for users. By curating new challenges around favorite spots, cultural traditions, or unique local experiences, these creators can showcase the Puerto Rico they love most. This not only helps promote hidden treasures across the island but also gives users a more authentic, community-driven way to explore.",
  },
];

export default function MissionSection() {
  return (
    <Row>
      {sectionItems.map((item) => (
        <Row key={item.id} $gap="0.5rem">
          <Heading>{item.heading}</Heading>
          <Card $bg="white">{item.body}</Card> //TODO fix css styles
        </Row>
      ))}
    </Row>
  );
}
