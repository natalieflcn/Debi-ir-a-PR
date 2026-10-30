import styled from "styled-components";
import Line from "../../../../shared/components/layout/Line";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Image from "../../../../shared/components/ui/Image";
import Card from "../../../../shared/components/layout/Card";
import WorkflowCard from "../../../../assets/images/ui/WorkflowCard.png";

const StyledStep = styled.div`
  display: flex;
  flex-direction: ${({ $index }) => ($index % 2 === 0 ? "row" : "row-reverse")};
  gap: var(--gap-lg);
  margin-top: 1rem;
  align-items: stretch;

  @media (max-width: 900px) {
    flex-direction: ${({ $index }) =>
      $index % 2 === 0 ? "column" : "column-reverse"};
    align-items: center;
  }
`;

const StyledCard = styled(Card)`
  width: 40%;
  min-width: 45%;
  display: flex;
  flex-direction: row;

  gap: var(--gap-lg);

  h2 {
    width: 3%;
    margin-right: 1rem;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--gap-xs);
    hr {
      width: 100%;
    }
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const StyledRow = styled(Row)`
  width: 55%;
  /* height: 28rem; */
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const StyledHeading = styled(Heading)`
  @media (max-width: 1200px) {
    font-size: var(--font-size-sm);
  }
`;
const WorkflowStep = function ({ step, index, stepIndex }) {
  return (
    <StyledStep $index={index} key={step.id}>
      <StyledRow>
        {/* <Image src="src/assets/images/content/TEMP.png" $width="100%" /> */}
        <StyledVideo autoPlay loop muted playsInline preload="metadata">
          <source src={step.demo} type="video/mp4" />
        </StyledVideo>
      </StyledRow>
      <StyledCard $cardShadow="outsetLG" $cardColor={`url(${WorkflowCard})`}>
        <Heading
          as="h2"
          $color="var(--color-yellow-200)"
          $shadowColor="var(--color-brown-400)"
        >
          {stepIndex + 1}
        </Heading>
        <Line $color="var(--color-brown-200)" />

        <Row>
          <Heading
            as="h4"
            $color="var(--color-yellow-200)"
            $shadowColor="var(--color-brown-400)"
          >
            {step.heading}
          </Heading>
          {step.description.map((sentence, index) => (
            <StyledHeading as="h6" $color="var(--color-dark-100)" key={index}>
              {sentence}
            </StyledHeading>
          ))}
        </Row>
      </StyledCard>
    </StyledStep>
  );
};

export default WorkflowStep;
