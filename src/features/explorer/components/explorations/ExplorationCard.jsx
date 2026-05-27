import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";
import { IoFlag } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Image from "../../../../shared/components/ui/Image";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
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
import fakeExplorationData from "../../pages/explorations/fakeExplorationData";
import ProgressBar from "../../../../shared/components/ui/ProgressBar";

function ExplorationCard({
  exploration = fakeExplorationData,
  userProgress = null,
}) {
  const hasStarted = userProgress !== 1;
  const stopsCompleted = userProgress?.stopsCompleted ?? 0;
  const stopsRemaining = exploration.numStops - stopsCompleted;

  return (
    <StyledExplorationCard $cardShadow="outsetLG">
      <ExplorationCardHeaderImage $image={exploration.headerImage}>
        <ExplorationCardHeaderDetails $gap="var(--gap-lg)">
          <ExplorationCardHeading
            as="h2"
            $color="var(--color-red-200)"
            $shadowColor="var(--color-brown-400)"
          >
            {exploration.explorationName}
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
                  {exploration.startLocation}, PR
                </Bold>
              </Row>
            </Row>

            {hasStarted && (
              <>
                <Row
                  $direction="horizontal"
                  $gap="var(--gap-xl)"
                  $align="center"
                >
                  <Row $direction="horizontal" $gap="var(--gap-sm)">
                    <IoFlag color="var(--color-red-300)" />
                    <Bold $color="var(--color-dark-200)">
                      {exploration.numStops} stops completed
                    </Bold>
                  </Row>
                  <Row $direction="horizontal" $gap="var(--gap-sm)">
                    <IoFlag color="var(--color-red-300)" />
                    <Bold $color="var(--color-dark-200)">
                      {exploration.stopsRemaining} stops remaining
                    </Bold>
                  </Row>
                </Row>
                <Row>
                  <ProgressBar completed={60}></ProgressBar>
                </Row>
              </>
            )}
          </Row>

          {!hasStarted && (
            <Button $variation="primary" $size="small">
              Start Exploring
            </Button>
          )}
        </ExplorationCardHeaderDetails>
      </ExplorationCardHeaderImage>

      <ExplorationCardBody>
        <Row $direction="horizontal" $gap="var(--gap-4xl)" $align="flex-start">
          <ExplorationCardAbout>
            <Heading as="h3" $color="var(--color-red-300)">
              ABOUT THIS EXPLORATION
            </Heading>
            <p>{exploration.longDescription}</p>
          </ExplorationCardAbout>

          <ExplorationCardLocations>
            <Heading as="h3" $color="var(--color-red-300)">
              EXPLORATION LOCATIONS
            </Heading>
            {exploration.locations.map((location) => (
              <Row
                $direction="horizontal"
                $gap="var(--gap-xl)"
                key={location.id}
              >
                <Row
                  $direction="horizontal"
                  $gap="var(--gap-md)"
                  $align="flex-start"
                >
                  {hasStarted &&
                    (location.completed ? (
                      <IoCheckmarkCircleSharp
                        size={25}
                        color="var(--color-red-300)"
                      />
                    ) : (
                      <FaRegCircle size={25} />
                    ))}
                  <LocationHeading as="h4" $color="var(--color-red-300)">
                    {location.id}
                  </LocationHeading>
                  <Heading as="h5">{location.locationName}</Heading>
                </Row>
                {hasStarted && (
                  <Button $variation="primary" $size="extraSmall">
                    Details
                  </Button>
                )}
              </Row>
            ))}
          </ExplorationCardLocations>
        </Row>
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
        <Image
          src="/src/assets/images/content/TEMP.png"
          $height="25rem"
          $objectFit="cover"
          $width="100%"
        />
        {!hasStarted && (
          <Card $cardColor="var(--color-light-100)">
            <Row $direction="horizontal" $align="space-evenly">
              <Row $direction="horizontal" $gap="var(--gap-lg)">
                <Image
                  src="/src/assets/images/content/TEMP.png"
                  $borderRadius="round"
                  $width="4rem"
                />
                <Heading as="h6">What are you waiting for?</Heading>
              </Row>
              <Button $variation="primary" $size="small">
                Start Exploring Now
              </Button>
            </Row>
          </Card>
        )}
      </ExplorationCardBody>
    </StyledExplorationCard>
  );
}
export default ExplorationCard;
