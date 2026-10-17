import styled from "styled-components";
import Card from "../../../shared/components/layout/Card";
import Heading from "../../../shared/components/typography/Heading";
import Bold from "../../../shared/components/typography/Bold";
import { IoFlag } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Row from "../../../shared/components/layout/Row";
import Button from "../../../shared/components/ui/Button";
import RouterLink from "../../../shared/components/routing/RouterLink";
import { useQuery } from "@tanstack/react-query";
import { getExplorationProgress } from "../../../services/explorationProgress";

const StyledExplorationCard = styled(Card)`
  /* align-items: flex-start;

  /* max-width: 31%; */
  /* min-width: 18rem;
  max-width: 31%;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  flex-grow: 1;
  position: relative;
  background-color: var(--color-light-0);
  color: var(--color-dark-200);  */

  display: flex;
  flex-direction: column;
  align-items: stretch; /* was flex-start */
  width: 100%;
  padding: 0;
  overflow: hidden;
  position: relative;
  background-color: var(--color-light-0);
  color: var(--color-dark-200);
`;

const ExplorationCardBackground = styled.div`
  background-image: ${({ $image }) => `url(${$image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  position: relative;
  height: 15rem;
  width: 100%;
`;

const ExplorationCardHeading = styled(Heading)`
  position: absolute;
  bottom: 0; /* always sticks to bottom of image */
  left: 0;
  right: 0;
  line-height: var(--line-height-2xl);
  text-align: right;
  background-color: rgba(241, 198, 202, 0.8);
  padding: 0.75rem 1.25rem;
  width: 85%;
  border-bottom-right-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);

  @media (max-width: 800px) {
    line-height: var(--line-height-lg);
  }
`;

const ExplorationCardBody = styled.div`
  display: flex;
  padding: 1.6rem;
  /* max-width: 100%; */
  gap: var(--gap-md);
  flex-direction: column;
  flex: 1;

  /* flex-wrap: wrap; */
`;

const StyledRow = styled(Row)`
  margin-top: auto;
`;
// const ExplorationDescription = styled.p`
//   line-height: var(--line-height-md);
// `;

const ExplorationDescription = styled.p`
  /* overflow-wrap: anywhere;
  margin-bottom: auto; */

  overflow-wrap: anywhere;
  margin-bottom: auto;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ButtonLink = styled(RouterLink)`
  flex: 1;
  display: block;
`;

const CardButton = styled(Button)`
  width: 100%;
  min-height: 5.4rem; /* fits two lines, so one-line labels match */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
`;

const AddressRow = styled(Row)`
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: var(--gap-sm);
  }
`;

function ExplorationMiniCard({ exploration, city, buttonDetails }) {
  return (
    <StyledExplorationCard $cardShadow="outsetLG">
      <ExplorationCardBackground $image={exploration.headerImage[0]?.url}>
        <ExplorationCardHeading
          as="h3"
          $color="var(--color-red-200)"
          $shadowColor="var(--color-brown-400)"
        >
          {exploration.name}
        </ExplorationCardHeading>
      </ExplorationCardBackground>

      <ExplorationCardBody>
        <ExplorationDescription>
          {exploration.description}
        </ExplorationDescription>

        <StyledRow>
          <AddressRow $direction="horizontal" $align="space-evenly">
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoFlag color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">
                {exploration.numStops} stop{exploration.numStops > 1 && "s"}
              </Bold>
            </Row>
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoLocationSharp color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">
                {city}
                {city === "Multiple Cities" ? "" : ", PR"}
              </Bold>
            </Row>
          </AddressRow>

          <Row $direction="horizontal" $gap="var(--gap-md)">
            {buttonDetails.map((button) => (
              <ButtonLink to={button.buttonLink} key={button.id}>
                <CardButton $variation={button.buttonVariation} $size="large">
                  {button.buttonName}
                </CardButton>
              </ButtonLink>
            ))}
          </Row>
        </StyledRow>
      </ExplorationCardBody>
    </StyledExplorationCard>
  );
}
export default ExplorationMiniCard;
