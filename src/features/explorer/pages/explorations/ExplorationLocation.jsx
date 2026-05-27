import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import fakeExplorationLocationData from "./fakeExplorationLocationData";
import Row from "../../../../shared/components/layout/Row";
import Bold from "../../../../shared/components/typography/Bold";
import { IoLocationSharp } from "react-icons/io5";
import Image from "../../../../shared/components/ui/Image";
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
} from "./explorationLocation.styles";
import Card from "../../../../shared/components/layout/Card";
import Button from "../../../../shared/components/ui/Button";

function ExplorationLocation({
  explorationLocation = fakeExplorationLocationData,
  userProgress = null,
}) {
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
              $shadowColor="var(--color-brown-400)"
            >
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
                ABOUT THIS LOCATION
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
              <Image
                src="/src/assets/images/content/TEMP.png"
                $borderRadius="round"
                $width="4rem"
              />
              <Heading as="h6">Have you explored this location yet?</Heading>
            </Row>
            <Button $variation="primary" $size="small">
              I have explored this location
            </Button>
          </Row>
        </ExplorationLocationVisited>
      </ExplorationLocationBody>
    </StyledExplorationLocation>
  );
}

export default ExplorationLocation;
