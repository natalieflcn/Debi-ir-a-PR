import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";
import { IoFlag } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Image from "../../../../shared/components/ui/Image";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import {
  ExplorationCardAbout,
  ExplorationCardBody,
  ExplorationCardHeaderDetails,
  ExplorationCardHeaderImage,
  ExplorationCardHeading,
  ExplorationCardLocations,
  StyledExplorationCard,
} from "./explorationCard.styles";

function ExplorationCard({}) {
  return (
    <StyledExplorationCard $cardShadow="outsetLG">
      <ExplorationCardHeaderImage>
        <ExplorationCardHeaderDetails $gap="var(--gap-lg)">
          <ExplorationCardHeading
            as="h2"
            $color="var(--color-red-200)"
            $shadowColor="var(--color-brown-400)"
          >
            Toa Alta Tour
          </ExplorationCardHeading>
          <Row $direction="horizontal" $gap="var(--gap-xl)" $align="center">
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoFlag color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">5 stops</Bold>
            </Row>
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoLocationSharp color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">Toa Alta, PR</Bold>
            </Row>
          </Row>
          <Button $variation="primary" $size="small">
            Start Exploring
          </Button>
        </ExplorationCardHeaderDetails>
      </ExplorationCardHeaderImage>

      <ExplorationCardBody>
        <Row $direction="horizontal" $gap="var(--gap-2xl)" $align="flex-start">
          <ExplorationCardAbout>
            <Heading as="h3" $color="var(--color-red-300)">
              ABOUT THIS EXPLORATION
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              varius egestas elit. Nam maximus mi vel lacus pulvinar, non
              blandit lorem venenatis. Sed suscipit leo viverra, condimentum
              velit non, viverra nisl.
            </p>

            <Image
              src="/src/assets/images/content/TEMP.png"
              $width="80%"
              $align="center"
            />
          </ExplorationCardAbout>

          <ExplorationCardLocations>
            <Heading as="h3" $color="var(--color-red-300)">
              EXPLORATION LOCATIONS
            </Heading>
            <Row
              $direction="horizontal"
              $gap="var(--gap-md)"
              $align="flex-start"
            >
              <Heading as="h4" $color="var(--color-red-300)">
                1
              </Heading>
              <Heading as="h5">Rey Chino Food</Heading>
            </Row>
            <Row
              $direction="horizontal"
              $gap="var(--gap-md)"
              $align="flex-start"
            >
              <Heading as="h4" $color="var(--color-red-300)">
                1
              </Heading>
              <Heading as="h5">Rey Chino Food</Heading>
            </Row>
            <Row
              $direction="horizontal"
              $gap="var(--gap-md)"
              $align="flex-start"
            >
              <Heading as="h4" $color="var(--color-red-300)">
                1
              </Heading>
              <Heading as="h5">Rey Chino Food</Heading>
            </Row>
          </ExplorationCardLocations>
        </Row>
      </ExplorationCardBody>
    </StyledExplorationCard>
  );
}
export default ExplorationCard;
