import { IoCheckmarkCircleSharp, IoLocationSharp } from "react-icons/io5";
import Row from "../../../shared/components/layout/Row";

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
import styled from "styled-components";
import LocationMap from "../../../shared/components/map/LocationMap";
import ImageCarousel from "../../../shared/components/carousel/ImageCarousel";

const StyledRow = styled(Row)`
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

const MapRow = styled(Row)`
  width: 70%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const AddressRow = styled(Row)`
  @media (max-width: 600px) {
    flex-direction: column;
    gap: var(--gap-sm);
    text-align: center;
  }
`;

const LocationDescription = styled.p`
  overflow-wrap: anywhere;
`;

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
      <RouterLink to={`/${type}${type && "/"}explorations/${exploration.slug}`}>
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to {exploration.name}
        </Button>
      </RouterLink>

      <StyledExplorationLocation $cardShadow="outsetLG">
        <ExplorationLocationHeaderImage $image={location?.headerImage[0]?.url}>
          <ExplorationLocationHeaderDetails>
            <Row $gap="var(--gap-sm)">
              <ExplorationLocationHeading as="h2" $color="var(--color-red-300)">
                {location.name}
              </ExplorationLocationHeading>

              <AddressRow
                $direction="horizontal"
                $gap="var(--gap-sm)"
                $align="center"
              >
                {" "}
                <IoLocationSharp color="var(--color-red-300)" />
                <Bold $color="var(--color-dark-200)">
                  {location.address.street},
                </Bold>{" "}
                <Bold $color="var(--color-dark-200)">
                  {location.address.city}, PR {location.address.zipcode}
                </Bold>
              </AddressRow>

              {headerDetails}
            </Row>
          </ExplorationLocationHeaderDetails>
        </ExplorationLocationHeaderImage>

        <ExplorationLocationBody>
          <StyledRow $direction="horizontal">
            <ExplorationLocationAbout>
              <Row $gap="var(--gap-sm)">
                <Heading as="h3" $color="var(--color-red-300)">
                  ABOUT {location.name.toUpperCase()}
                </Heading>
                <LocationDescription>
                  {location.description}
                </LocationDescription>
              </Row>
              <TagCollection>
                {location.tags.map((tag) => (
                  <ExplorationLocationTag key={tag}>
                    {capitalize(tag)}
                  </ExplorationLocationTag>
                ))}
              </TagCollection>
            </ExplorationLocationAbout>
            <MapRow>
              {/* {location?.map?.coordinates && (
                <LocationMap coordinates={location.map.coordinates} />
              )} */}
            </MapRow>
          </StyledRow>

          {/* <Carousel
            autoPlay={true}
            showArrows={true}
            wrapMode="wrap"
            afterSlide={(slide) => console.log(slide)}
          >
            {location.images.slice(0, 3).map((image, i) => (
              <Image
                src={image?.url}
                $align="center"
                $width="100%"
                $height="23rem"
                $objectFit="cover"
                key={i}
                $borderRadius="none"
              />
            ))}
          </Carousel> */}

          <ImageCarousel images={location.images} />

          <ExplorationLocationFooter $cardColor="var(--color-light-100)">
            {footerCTA}
          </ExplorationLocationFooter>
        </ExplorationLocationBody>
      </StyledExplorationLocation>
    </Row>
  );
}

export default ExplorationLocationCard;
