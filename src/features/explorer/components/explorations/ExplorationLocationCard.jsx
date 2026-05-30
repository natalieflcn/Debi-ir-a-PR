import { IoCheckmarkCircleSharp, IoLocationSharp } from "react-icons/io5";
import Row from "../../../../shared/components/layout/Row";
import {
  ExplorationLocationAbout,
  ExplorationLocationBody,
  ExplorationLocationHeaderDetails,
  ExplorationLocationHeaderImage,
  ExplorationLocationHeading,
  ExplorationLocationTag,
  ExplorationLocationTags,
  ExplorationLocationVisited,
  StyledExplorationLocation,
} from "./explorationLocationCard.styles";
import fakeExplorationLocationData from "../../pages/explorations/fakeExplorationLocationData";
import Bold from "../../../../shared/components/typography/Bold";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";
import { FaRegCircle } from "react-icons/fa";

function ExplorationLocationCard({ explorationLocation, userCompleted }) {
  return (
    <StyledExplorationLocation>
      <ExplorationLocationHeaderImage $image={explorationLocation.headerImage}>
        <ExplorationLocationHeaderDetails>
          <Row $gap="var(--gap-sm)">
            <ExplorationLocationHeading
              as="h2"
              $shadowColor="var(--color-brown-400)"
            >
              {explorationLocation.explorationName}
            </ExplorationLocationHeading>
            <ExplorationLocationHeading
              as="h4"
              $color="var(--color-red-200)"
              $shadowColor="var(--color-brown-400)"
            >
              {userCompleted ? (
                <IoCheckmarkCircleSharp
                  size={25}
                  color="var(--color-red-300)"
                />
              ) : (
                <FaRegCircle size={25} />
              )}{" "}
              {explorationLocation.locationName}
            </ExplorationLocationHeading>

            <Row $direction="horizontal" $gap="var(--gap-sm)" $align="center">
              <IoLocationSharp color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">
                {explorationLocation.locationAddress}
              </Bold>
            </Row>
          </Row>
        </ExplorationLocationHeaderDetails>
      </ExplorationLocationHeaderImage>
      <ExplorationLocationBody>
        <Row $direction="horizontal">
          <ExplorationLocationAbout>
            <Row $gap="var(--gap-sm)">
              <Heading as="h3" $color="var(--color-red-300)">
                ABOUT {explorationLocation.locationName.toUpperCase()}
              </Heading>
              {explorationLocation.description}
            </Row>
            <ExplorationLocationTags>
              <ExplorationLocationTag>hi</ExplorationLocationTag>
              <ExplorationLocationTag>hi</ExplorationLocationTag>
            </ExplorationLocationTags>
          </ExplorationLocationAbout>
          <Image src="/src/assets/images/content/TEMP.png" $width="50%" />
        </Row>
        <Row $direction="horizontal">
          {explorationLocation.images.map((image) => (
            <Image
              src={image.imageURL}
              $align="center"
              $width="30%"
              key={image.id}
            />
          ))}
        </Row>

        <ExplorationLocationVisited $cardColor="var(--color-light-100)">
          <Row $direction="horizontal" $align="space-evenly">
            <Row $direction="horizontal" $gap="var(--gap-lg)">
              {!userCompleted && (
                <Heading as="h6">Have you explored this location yet?</Heading>
              )}
            </Row>

            {userCompleted && (
              <Row
                $direction="horizontal"
                $gap="var(--gap-sm
              )"
              >
                <Heading as="h5" $color="var(--color-red-300)">
                  Completed!
                </Heading>
                <IoCheckmarkCircleSharp
                  size={40}
                  color="var(--color-red-300)"
                />
              </Row>
            )}

            {!userCompleted ? (
              <Button $variation="primary" $size="small">
                I have explored this location
              </Button>
            ) : (
              <Button $variation="darkRed" $size="small">
                I have explored this location
              </Button>
            )}
          </Row>
        </ExplorationLocationVisited>
      </ExplorationLocationBody>
    </StyledExplorationLocation>
  );
}

export default ExplorationLocationCard;
