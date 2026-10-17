import styled from "styled-components";
import Line from "../../../../shared/components/layout/Line";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Image from "../../../../shared/components/ui/Image";
import Card from "../../../../shared/components/layout/Card";

const StyledStep = styled.div`
  display: flex;
  flex-direction: ${({ $index }) => ($index % 2 === 0 ? "row" : "row-reverse")};
  gap: var(--gap-lg);
  margin-top: 1rem;

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

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: var(--gap-xs);
    hr {
      width: 100%;
    }
  }
`;

const StyledRow = styled(Row)`
  width: 55%;
  height: 28rem;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;
const WorkflowStep = function ({ step, index, stepIndex }) {
  return (
    <StyledStep $index={index} key={step.id}>
      <StyledRow>
        <Image src="src/assets/images/content/TEMP.png" $width="100%" />
      </StyledRow>
      <StyledCard
        $cardShadow="outsetLG"
        $cardColor='url("src/assets/images/ui/WorkflowCard.png")'
      >
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
            <Heading as="h6" $color="var(--color-dark-100)" key={index}>
              {sentence}
            </Heading>
          ))}
        </Row>
      </StyledCard>
    </StyledStep>
  );
};

export default WorkflowStep;
