import Heading from "../../../../shared/components/typography/Heading";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";

function HowItWorksSection() {
  return (
    <div>
      <Heading as="h2">Explore the Real Puerto Rico</Heading>
      <p>So many ways to meet Puerto Rico.</p>
      <Row $direction="horizontal">
        <Card>
          Eat where Puerto Ricans eat – family-owned restaurants, roadside
          lechoneras, third-generation fondas.
        </Card>
        <Card>
          Walk through history in places that have outlasted everything on the
          island.
        </Card>
        <Card>
          Drink from the island – neighborhood barras, salsa joints, rum bars
          with no sign
        </Card>
      </Row>
      <Row $direction="horizontal">
        <Card>
          find the hidden beaches, the unmarked trails, the waterfalls that no
          resort will ever take you to
        </Card>
        <Card>
          Find the most exciting things to do on the island during your stay.
          ride, paddle, dance cook, small experiences led by people who grew up
          doing them
        </Card>
        <Card>...and so much more!</Card>
      </Row>
      <p>
        Every exploration is a curated journey through a corner of the island —
        built by people who know it best.
      </p>
    </div>
  );
}

export default HowItWorksSection;
