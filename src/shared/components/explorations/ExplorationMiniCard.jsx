import styled from "styled-components";
import Card from "../layout/Card";
import Heading from "../typography/Heading";
import Bold from "../typography/Bold";
import { IoFlag } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Row from "../layout/Row";
import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";

const StyledExplorationCard = styled(Card)`
  align-items: flex-start;

  max-width: 31%;
  width: 31%;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  flex-grow: 1;
  position: relative;
  background-color: var(--color-light-0);
  color: var(--color-dark-200);
`;

const ExplorationCardBackground = styled.div`
  background-image: url("/src/assets/images/content/TEMP.png");
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
`;

const ExplorationCardBody = styled.div`
  padding: 1.75rem;
`;

// const ExplorationDescription = styled.p`
//   line-height: var(--line-height-md);
// `;

function ExplorationMiniCard({
  name,
  description,
  numStops,
  startLocation,
  buttonDetails,
}) {
  return (
    <StyledExplorationCard $cardShadow="outsetLG">
      <ExplorationCardBackground>
        <ExplorationCardHeading
          as="h3"
          $color="var(--color-red-200)"
          $shadowColor="var(--color-brown-400)"
        >
          {name}
        </ExplorationCardHeading>
      </ExplorationCardBackground>

      <ExplorationCardBody>
        <Row $gap="var(--gap-lg)">
          <p>{description}</p>

          <Row $direction="horizontal" $align="space-evenly">
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoFlag color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">{numStops} stops</Bold>
            </Row>
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoLocationSharp color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">{startLocation}, PR</Bold>
            </Row>
          </Row>

          <Row $direction="horizontal" $gap="var(--gap-md)">
            {buttonDetails.map((button) => (
              <RouterLink to={button.buttonLink} key={button.id}>
                <Button $variation={button.buttonVariation} $size="large">
                  {button.buttonName}
                </Button>
              </RouterLink>
            ))}
          </Row>
        </Row>
      </ExplorationCardBody>
    </StyledExplorationCard>
  );
}
export default ExplorationMiniCard;
