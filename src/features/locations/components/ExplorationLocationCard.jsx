import { IoCheckmarkCircleSharp, IoLocationSharp } from "react-icons/io5";
import Row from "../../../shared/components/layout/Row";

import fakeExplorationLocationData from "../../explorer/pages/explorations/fakeExplorationLocationData";
import Bold from "../../../shared/components/typography/Bold";
import Heading from "../../../shared/components/typography/Heading";
import Button from "../../../shared/components/ui/Button";
import Image from "../../../shared/components/ui/Image";
import { FaArrowLeft, FaRegCircle } from "react-icons/fa";
import {
  ExplorationLocationAbout,
  ExplorationLocationBody,
  ExplorationLocationFooter,
  ExplorationLocationHeaderDetails,
  ExplorationLocationHeaderImage,
  ExplorationLocationHeading,
  ExplorationLocationTag,
  TagCollection,
  StyledExplorationLocation,
} from "./explorationLocationCard.styles";
import RouterLink from "../../../shared/components/routing/RouterLink";
import { capitalize } from "../../../shared/utils/helpers";

function ExplorationLocationCard({
  exploration,
  location,
  userCompleted,
  headerDetails,
  footerCTA,
  type = "",
}) {
  return (
    <Row $gap="var(--gap-lg)">
      <RouterLink to={`/${type}${type && "/"}explorations/${exploration}`}>
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to {location.name}
        </Button>
      </RouterLink>

      <StyledExplorationLocation>
        <ExplorationLocationHeaderImage $image={location.headerImage}>
          <ExplorationLocationHeaderDetails>
            <Row $gap="var(--gap-sm)">
              <ExplorationLocationHeading
                as="h2"
                $shadowColor="var(--color-brown-400)"
              >
                {location.name}
              </ExplorationLocationHeading>

              {headerDetails}

              <Row $direction="horizontal" $gap="var(--gap-sm)" $align="center">
                <IoLocationSharp color="var(--color-red-300)" />
                <Bold $color="var(--color-dark-200)">{location.address}</Bold>
              </Row>
            </Row>
          </ExplorationLocationHeaderDetails>
        </ExplorationLocationHeaderImage>
        <ExplorationLocationBody>
          <Row $direction="horizontal">
            <ExplorationLocationAbout>
              <Row $gap="var(--gap-sm)">
                <Heading as="h3" $color="var(--color-red-300)">
                  ABOUT {location.name.toUpperCase()}
                </Heading>
                {location.description}
              </Row>
              <TagCollection>
                {location.tags.map((tag) => (
                  <ExplorationLocationTag key={tag}>
                    {capitalize(tag)}
                  </ExplorationLocationTag>
                ))}
              </TagCollection>
            </ExplorationLocationAbout>
            <Image src="/src/assets/images/content/TEMP.png" $width="50%" />
          </Row>
          <Row $direction="horizontal">
            {location.images.map((image) => (
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
