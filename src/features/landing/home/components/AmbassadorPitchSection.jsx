import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";

function AmbassadorPitchSection() {
  return (
    <div>
      <p>For Puerto Ricans</p>
      <Heading as="h2">You Know Puerto Rico better than anyone.</Heading>
      <Heading as="h2">Help others experience it.</Heading>
      <p>
        The best explorations are built by people who actually love the island.
        As an Ambassador, you can create explorations around your favorite spots
        — the restaurant your family has eaten at for generations, the beach
        only locals know about, the bar where everyone goes after work.
      </p>
      <Row $direction="horizontal">
        <Card>
          Send people to your spots. Put the bakery, the beach, the bar, your
          tio runs on the map for travelers who actually want to find them.
        </Card>
        <Card>
          Build your own explorations: Create routes around your barrio, your
          favorite coast, your family’s recipes – in your voice. Shape how the
          world experiences Puerto Rico.
        </Card>
        <Card>
          See your impact: Watch in real time as Explorers discover the places
          you love and keep coming back
        </Card>
      </Row>
      <p>Share the island you grew up on.</p>
      <Button>Become an Ambassador</Button>
      <Button>Login as an Ambassador</Button>
    </div>
  );
}

export default AmbassadorPitchSection;
