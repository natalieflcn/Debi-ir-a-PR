import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import styled from "styled-components";
import Bold from "../../../../shared/components/typography/Bold";
import SmallText from "../../../../shared/components/typography/SmallText";

const sectionItems = [
  {
    id: 0,
    problem: "Image uploads potentially overwhelming the server.",
    cause: [
      "Due to the designs of my Exploration model and the workflow to create an exploration, uploading images during an exploration submission would've overloaded my server.",
    ],
    solution:
      "Instead of having my server validate and relay images to Cloudinary, the server just signs uploads to Cloudinary that the client directly delivers. ",
    takeaway:
      "In the future, I could be more mindful about data design -- instead of embedding Locations into Explorations, I could've used parent-referencing to define their relationship.",
  },
  {
    id: 1,
    problem: "Address Validation API vs. Geocoding API",
    cause: [
      "I struggled to create a simple workflow around the Address Validation API.",
      "Ideally, I wanted to allow the user to validate an address, select a formatted address if it's to their liking, while using the coordinates of the formatted address to generate a marker in an adjacent Google Maps API.",
      "But I was worried about the user disagreeing with the automated pin and wanting to move it manually, which would no longer be synchronized with the formatted address.",
    ],
    solution:
      "Instead of synchronizing address validation and marker generation, I created an isolated MapBuilder component which allowed users to generate a marker based on the address currently available in the form. If the user decides to manually move the marker, the new coordinates will be used as the source of truth.",
    takeaway:
      "In the future, I could've taken more time to understand the requirements of the feature that I wanted to implement, to prevent myself from wasting time trying to make a certain API (Address Validation API) fit my application needs, when there were better options suited for the scope of the project (Geocoding API).",
  },
  {
    id: 2,
    problem:
      "Keeping exploration pages in sync with the UI while explorers actively update their exploration progress.",
    cause: [
      "While testing the Explorer UI, I noticed inconsistencies on exploration components that heavily depended on exploration progress.",
      "These updates would only be reflected after navigating around the app, but not immediately after a user had started an exploration, visited a location, completed an exploration, etc.",
    ],
    solution:
      "I implemented React Query with user-scoped query keys to help me refetch the respective exploration data after a user's exploration progress was updated. Now, after every button click that lead to a change in a user's exploration progress data, the UI would reflect this update immediately, leading to a better UI/UX for explorers.",
    takeaway:
      "In the future, I would've fetched all of my data with React Query (instead of React Router Loaders). Not only for its refetching capability, but also to use its cache throughout the rest of my project, heavily improving the performance of my app.",
  },
];

const StyledRow = styled(Row)`
  flex: 1;
  align-self: flex-start;

  @media (max-width: 800px) {
    gap: var(--gap-sm);
  }
`;

const ItemRow = styled(Row)`
  @media (max-width: 800px) {
    flex-direction: column;
    gap: var(--gap-lg);
  }
`;

export default function ChallengesSection() {
  return (
    <Row>
      {sectionItems.map((item) => (
        <Card $cardColor="var(--color-light-0)" key={item.id}>
          <ItemRow $direction="horizontal" $gap="var(--gap-xl)">
            <StyledRow $align="start" $gap="var(--gap-md)">
              <Heading as="h4" $color="var(--color-red-200)">
                Problem
              </Heading>
              <Bold $color="var(--color-dark-200)">{item.problem}</Bold>
              {item.cause.map((cause, i) => (
                <SmallText key={i}>{cause}</SmallText>
              ))}
            </StyledRow>

            <StyledRow $align="start">
              <Heading as="h4" $color="var(--color-blue-200)">
                Solution
              </Heading>
              <SmallText>{item.solution}</SmallText>
              <SmallText>{item.takeaway}</SmallText>
            </StyledRow>
          </ItemRow>
        </Card>
      ))}
    </Row>
  );
}
