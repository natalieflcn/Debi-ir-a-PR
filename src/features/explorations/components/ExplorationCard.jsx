import Card from "../../../shared/components/layout/Card";
import Heading from "../../../shared/components/typography/Heading";
import Bold from "../../../shared/components/typography/Bold";
import { IoFlag } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Image from "../../../shared/components/ui/Image";
import Row from "../../../shared/components/layout/Row";
import Button from "../../../shared/components/ui/Button";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowLeft, FaRegCircle } from "react-icons/fa";
import {
  ExplorationCardAbout,
  ExplorationCardBody,
  ExplorationCardHeaderDetails,
  ExplorationCardHeaderImage,
  ExplorationCardHeading,
  ExplorationCardLocations,
  LocationHeading,
  StyledExplorationCard,
} from "./explorationCard.styles";

import {
  ExplorationLocationTag,
  ExplorationLocationTags,
} from "../../locations/components/explorationLocationCard.styles";
import RouterLink from "../../../shared/components/routing/RouterLink";

function getUserProgress(locations, userHistory) {}

function ExplorationCard({
  exploration,
  headerDetails,
  locationDetails,
  footerCTA,
  type = "",
}) {
  return (
    <Row $gap="var(--gap-lg)">
      <RouterLink to={`/${type}${type && "/"}explorations`}>
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to Explorations
        </Button>
      </RouterLink>
      <StyledExplorationCard $cardShadow="outsetLG">
        <ExplorationCardHeaderImage $image={exploration.headerImage}>
          <ExplorationCardHeaderDetails $gap="var(--gap-lg)">
            <ExplorationCardHeading
              as="h2"
              $color="var(--color-red-200)"
              $shadowColor="var(--color-brown-400)"
            >
              {exploration.name}
            </ExplorationCardHeading>

            <Row $gap="var(--gap-md)">
              <Row $direction="horizontal" $gap="var(--gap-xl)" $align="center">
                <Row $direction="horizontal" $gap="var(--gap-sm)">
                  <IoFlag color="var(--color-red-300)" />
                  <Bold $color="var(--color-dark-200)">
                    {exploration.numStops} total stops
                  </Bold>
                </Row>

                <Row $direction="horizontal" $gap="var(--gap-sm)">
                  <IoLocationSharp color="var(--color-red-300)" />
                  <Bold $color="var(--color-dark-200)">
                    {exploration.startingCity}, PR
                  </Bold>
                </Row>
              </Row>
            </Row>

            {headerDetails}
          </ExplorationCardHeaderDetails>
        </ExplorationCardHeaderImage>

        <ExplorationCardBody>
          <Row
            $direction="horizontal"
            $gap="var(--gap-4xl)"
            $align="flex-start"
          >
            <ExplorationCardAbout>
              <Heading as="h3" $color="var(--color-red-300)">
                ABOUT THIS EXPLORATION
              </Heading>
              <p>{exploration.description}</p>
              <ExplorationLocationTags>
                <ExplorationLocationTag>hi</ExplorationLocationTag>
                <ExplorationLocationTag>hi</ExplorationLocationTag>
              </ExplorationLocationTags>
            </ExplorationCardAbout>

            <ExplorationCardLocations>
              <Heading as="h3" $color="var(--color-red-300)">
                EXPLORATION LOCATIONS
              </Heading>

              {locationDetails}
            </ExplorationCardLocations>
          </Row>

          <Image
            src="/src/assets/images/content/TEMP.png"
            $height="25rem"
            $objectFit="cover"
            $width="100%"
          />

          <Row $direction="horizontal">
            {exploration.images.map((image) => (
              <Image
                src={image.imageURL}
                $align="center"
                $width="30%"
                key={image.id}
              />
            ))}
          </Row>

          {footerCTA}
        </ExplorationCardBody>
      </StyledExplorationCard>
    </Row>
  );
}
export default ExplorationCard;
