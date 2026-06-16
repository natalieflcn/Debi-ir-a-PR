import { IoCheckmarkCircleSharp, IoLocationSharp } from "react-icons/io5";
import Row from "../layout/Row";

import fakeExplorationLocationData from "../../../features/explorer/pages/explorations/fakeExplorationLocationData";
import Bold from "../typography/Bold";
import Heading from "../typography/Heading";
import Button from "../ui/Button";
import Image from "../ui/Image";
import { FaArrowLeft, FaRegCircle } from "react-icons/fa";
import {
  ExplorationLocationAbout,
  ExplorationLocationBody,
  ExplorationLocationFooter,
  ExplorationLocationHeaderDetails,
  ExplorationLocationHeaderImage,
  ExplorationLocationHeading,
  ExplorationLocationTag,
  ExplorationLocationTags,
  StyledExplorationLocation,
} from "./explorationLocationCard.styles";
import RouterLink from "../ui/RouterLink";

function ExplorationLocationCard({
  explorationLocation,
  userCompleted,
  headerDetails,
  footerCTA,
}) {
  return (
    <Row $gap="var(--gap-lg)">
      <RouterLink to="/explorations/:explorationId">
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to{" "}
          {explorationLocation.explorationName}
        </Button>
      </RouterLink>

      <StyledExplorationLocation>
        <ExplorationLocationHeaderImage
          $image={explorationLocation.headerImage}
        >
          <ExplorationLocationHeaderDetails>
            <Row $gap="var(--gap-sm)">
              <ExplorationLocationHeading
                as="h2"
                $shadowColor="var(--color-brown-400)"
              >
                {explorationLocation.explorationName}
              </ExplorationLocationHeading>

              {headerDetails}

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

          <ExplorationLocationFooter $cardColor="var(--color-light-100)">
            {footerCTA}
          </ExplorationLocationFooter>
        </ExplorationLocationBody>
      </StyledExplorationLocation>
    </Row>
  );
}

export default ExplorationLocationCard;
