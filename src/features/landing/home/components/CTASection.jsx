import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";

function CTASection() {
  return (
    <div>
      <Heading as="h2">Ready to explore?</Heading>
      <p>Stop planning. Start discovering.</p>
      <Button>Become an Explorer</Button> <Button>Learn More</Button>
      <Button>Login</Button>
    </div>
  );
}

export default CTASection;
