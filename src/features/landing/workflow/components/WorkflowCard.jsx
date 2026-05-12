import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import WorkflowStep from "./WorkflowStep";

const WorkFlowCard = function ({ section, index }) {
  return (
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
        <WorkflowStep step={step} stepIndex={stepIndex} index={index} />
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
  );
};

export default WorkFlowCard;
