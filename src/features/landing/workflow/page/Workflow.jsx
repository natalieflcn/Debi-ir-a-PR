import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import Card from "../../../../shared/components/layout/Card";
import workflowData from "../data/workflowData";
import Image from "../../../../shared/components/ui/Image";
import Line from "../../../../shared/components/layout/Line";

const StyledStep = styled.div`
  display: flex;
  flex-direction: ${({ $index }) => ($index % 2 === 0 ? "row" : "row-reverse")};
  gap: var(--gap-lg);
  margin-top: 1rem;
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
`;

function Workflow() {
  return (
    <Row $gap="var(--gap-xl)">
      {workflowData.map((section, index) => (
        <Card
          key={section.id}
          $gap="var(--gap-md)"
          $cardShadow="insetLG"
          $shadowColor="var(--color-dark-200)"
          $cardColor={section.cardColor}
        >
          <Heading
            as="h2"
            $color="var(--color-yellow-200)"
            $shadowColor="var(--color-brown-400)"
          >
            {section.heading.toUpperCase()}
          </Heading>

          <Row>
            <Heading
              $color="var(--color-light-200)"
              $shadowColor="var(--color-blue-400)"
              as="h3"
            >
              {section.tagline}
            </Heading>
          </Row>
          <Row>
            <Heading $color="var(--color-light-0)" as="h5">
              {section.description}
            </Heading>
          </Row>

          {section.sections.map((step, stepIndex) => (
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
          ))}
          <Card
            $cardColor={`url("src/assets/images/ui/Sand.png")`}
            $align="center"
            $cardShadow="outsetMD"
            $shadowColor="var(--color-light-0)"
          >
            <Row $gap="var(--gap-md)">
              <Heading
                as="h3"
                $color="var(--color-yellow-200)"
                $shadowColor="var(--color-brown-400)"
              >
                {section.CTA.description.toUpperCase()}
              </Heading>
              <Row $direction="horizontal" $gap="var(--gap-lg)">
                <Button $size="medium" $variation="secondary">
                  {section.CTA.primaryLink.label}
                </Button>
                <Button $size="medium" $variation="primary">
                  {section.CTA.secondaryLink.label}
                </Button>
              </Row>
            </Row>
          </Card>
        </Card>
      ))}
    </Row>
  );
}

export default Workflow;
