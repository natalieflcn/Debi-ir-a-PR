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
  display: flex;
  flex-direction: row;
  gap: var(--gap-lg);

  h2 {
    width: 3%;
    margin-right: 1rem;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const WorkflowStep = function ({ step, index, stepIndex }) {
  return (
    <StyledStep $index={index} key={step.id}>
      <Image src="src/assets/images/content/TEMP.png" $width="25%" />
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
