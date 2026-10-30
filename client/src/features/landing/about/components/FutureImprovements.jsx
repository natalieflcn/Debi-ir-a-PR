import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import styled from "styled-components";
import Bold from "../../../../shared/components/typography/Bold";
import SmallText from "../../../../shared/components/typography/SmallText";

const sectionItems = [
  {
    id: 0,
    title: "Clean up orphaned images on Cloudinary.",
    explanation: [
      "Deleting or editing an exploration or location does not remove images from Cloudinary.",
      "In the future, I could use the publicId returned from Cloudinary uploads to identify images stored on the cloud for deletion.",
      "This cleanup could be performed when a singular image, an associated location, or an associated exploration is deleted.",
    ],
  },
  {
    id: 1,
    title: "Make data analytics more comprehensive for Ambassadors and Admins.",
    explanation: [
      "Data analysis could be a lot more thorough, offering statistics that describe each explorer's individual performance, how explorers interact with each exploration, the municipalities where the most locations have been visited, and so much more.",
      "This could be produced by an aggregation pipeline in the back-end, instead of calculating statistics on the client.",
    ],
  },
  {
    id: 2,
    title:
      "Transform the platform into a more social experience for Explorers.",
    explanation: [
      "The platform could be less individualized and become more community-driven.",
      "Explorers could interact with each other, befriend each other, follow up on each other's progress, leave reviews or comments for each exploration. In their reviews, they could post their own photos of each location they've visited within an exploration.",
      "There could be a leaderboard to display the top explorers, promoting both community and competition within the app.",
    ],
  },
  {
    id: 3,
    title: "Create a Draft feature for Ambassadors and Admins.",
    explanation: [
      "Currently, if an exploration or location is not published before exiting the form, all data will be lost.",
      "The platform could allow Ambassadors and Admins to save drafts of explorations and locations that they're not ready to publish yet.",
    ],
  },
];

export default function FutureImprovements() {
  return (
    <Row>
      {sectionItems.map((item) => (
        <Card $cardColor="var(--color-light-0)" key={item.id}>
          <Row $gap="var(--gap-sm)">
            <Bold $color="var(--color-red-300)">{item.title}</Bold>
            <Row $align="start" $gap="var(--gap-md)">
              {item.explanation.map((sentence, i) => (
                <SmallText key={i}>{sentence}</SmallText>
              ))}
            </Row>
          </Row>
        </Card>
      ))}
    </Row>
  );
}
