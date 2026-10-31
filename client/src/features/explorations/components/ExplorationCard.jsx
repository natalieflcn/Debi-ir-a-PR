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
import { ExplorationTag } from "../../../shared/components/form/ExplorationTagBuilder";
import {
  ExplorationCardAbout,
  ExplorationCardBody,
  ExplorationCardHeaderDetails,
  ExplorationCardHeaderImage,
  ExplorationCardHeading,
  ExplorationCardLocations,
  ExplorationDescription,
  ExplorationDetailsRow,
  ExplorationImagesRow,
  StyledExplorationCard,
  StyledHeaderDetailsRow,
} from "../../explorations/components/explorationCard.styles";

import {
  ExplorationLocationTag,
  TagCollection,
} from "../../locations/components/explorationLocationCard.styles";
import RouterLink from "../../../shared/components/routing/RouterLink";
import { capitalize, optimize } from "../../../shared/utils/helpers";
import { startExploration } from "../../../services/explorationProgress";
import Spinner from "../../../shared/components/ui/Spinner";
import ExplorationMap from "../../../shared/components/map/ExplorationMap";
import ImageCarousel from "../../../shared/components/carousel/ImageCarousel";

function ExplorationCard({
  exploration,
  headerDetails,
  locationDetails,
  footerCTA,
  type = "",
}) {
  const coordinates = exploration?.locations.map((loc) => {
    if (!loc?.map) return null;

    return {
      name: loc?.name,
      location: loc?.map?.coordinates,
    };
  });

  // Deriving Images from Locations
  const locationHeaderImages = exploration.locations.flatMap(
    (loc) => loc.headerImage,
  );
  const locationImages = exploration.locations.flatMap((loc) => loc.images[0]);
  const derivedImages = [...locationHeaderImages, ...locationImages].filter(
    (img) => img !== undefined && img !== null,
  );

  return (
    <Row $gap="var(--gap-lg)">
      <RouterLink to={`/${type}${type && "/"}explorations`}>
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to Explorations
        </Button>
      </RouterLink>
      <StyledExplorationCard $cardShadow="outsetLG">
        <ExplorationCardHeaderImage
          $image={optimize(exploration.headerImage[0]?.url)}
        >
          <ExplorationCardHeaderDetails $gap="var(--gap-md)">
            <ExplorationCardHeading
              as="h2"
              $color="var(--color-red-200)"
              $shadowColor="var(--color-brown-400)"
            >
              {exploration.name.toUpperCase()}
            </ExplorationCardHeading>

            <Row $gap="var(--gap-md)">
              <StyledHeaderDetailsRow
                $direction="horizontal"
                $gap="var(--gap-xl)"
                $align="center"
              >
                <Row $direction="horizontal" $gap="var(--gap-sm)">
                  <IoFlag color="var(--color-red-300)" />
                  <Bold $color="var(--color-dark-200)">
                    {exploration.numStops} total stop
                    {exploration.numStops > 1 && "s"}
                  </Bold>
                </Row>

                <Row $direction="horizontal" $gap="var(--gap-sm)">
                  <IoLocationSharp color="var(--color-red-300)" />
                  <Bold $color="var(--color-dark-200)">
                    {exploration.cities.length === 1
                      ? `${exploration.cities[0]}, PR`
                      : "Multiple Cities"}
                  </Bold>
                </Row>
              </StyledHeaderDetailsRow>{" "}
              {headerDetails}
            </Row>
          </ExplorationCardHeaderDetails>
        </ExplorationCardHeaderImage>
        <ExplorationCardBody>
          <ExplorationDetailsRow
            $direction="horizontal"
            $gap="var(--gap-4xl)"
            $align="flex-start"
          >
            <ExplorationCardAbout>
              <Heading as="h3" $color="var(--color-red-300)">
                ABOUT THIS EXPLORATION
              </Heading>
              <ExplorationDescription>
                {exploration.description}
              </ExplorationDescription>

              <TagCollection>
                {exploration.tags.map((tag) => (
                  <ExplorationTag key={tag}>{capitalize(tag)}</ExplorationTag>
                ))}
              </TagCollection>
            </ExplorationCardAbout>

            <ExplorationCardLocations>
              <Heading as="h3" $color="var(--color-red-300)">
                EXPLORATION LOCATIONS
              </Heading>

              {locationDetails}
            </ExplorationCardLocations>
          </ExplorationDetailsRow>

          <ExplorationMap coordinates={coordinates} />

          {derivedImages.length > 0 && <ImageCarousel images={derivedImages} />}

          {footerCTA}
        </ExplorationCardBody>
      </StyledExplorationCard>
    </Row>
  );
}
export default ExplorationCard;
