import styled, { css } from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import Bold from "../../../../shared/components/typography/Bold";
import Heading from "../../../../shared/components/typography/Heading";
import Link from "../../../../shared/components/ui/Link";
import Button from "../../../../shared/components/ui/Button";

const acts = [
  {
    id: "act-20",
    name: "ACT 20",
    description:
      "was introduced in 2012 to attract businesses by offering major tax incentives for companies exporting services from Puerto Rico to clients abroad in the states.",
  },
  {
    id: "act-22",
    name: "ACT 22",
    description:
      "went even further—granting wealthy individuals who relocated to Puerto Rico a 100% tax exemption on passive income. While this offer is lucrative for investors, locals are left competing in a real estate market where property values and rents have skyrocketed, making homeownership and affordable housing increasingly out of reach.",
  },
  {
    id: "act-60",
    name: "ACT 60",
    description:
      "consolidated these laws in 2019 to allow wealthy non-residents to dramatically cut their tax burdens, paying far less in taxes than native Puerto Ricans. While framed as economic development, much of this wealth never reaches local communities. Instead, it accelerates gentrification, deepens inequality, and intensifies the housing crisis.",
  },
];

const StyledEndActSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* font-size: 1rem; */

  h5 {
    color: var(--color-red-400);
  }

  @media (max-width: 798px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 50%;
    }
  }
`;

const StyledActSectionCTA = styled.figure`
  display: flex;

  @media (max-width: 798px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ActSectionCTA = function () {
  return (
    <StyledActSectionCTA>
      <Image
        src="src/assets/images/content/PRxDC.jpg"
        alt="A Puerto Rican flag"
        $width="43%"
        $css={css`
          margin-right: 1.25rem;
        `}
      />
      <Row>
        <Heading as="h5">So, now what?</Heading>
        <Bold>What can we do?</Bold>
        <Row>
          We can continue spreading awareness about the harm these laws cause to
          Puerto Rican families.
        </Row>
        <Row>
          And we can take action—starting with these petitions to ensure the
          island can be heard.
        </Row>

        <Link href="https://www.change.org/p/puerto-rico-state-senate-eliminate-puerto-rico-s-act-60-act-20-22">
          <Button $size="large" $variation="primary">
            Sign Petition on Change.org
          </Button>
        </Link>
        <Link href="https://actionnetwork.org/letters/end-tax-evasion-close-act-22-loophole">
          <Button $size="large" $variation="secondary">
            Sign Petition on ActionNetwork.org
          </Button>
        </Link>
      </Row>
    </StyledActSectionCTA>
  );
};

export default function EndActSection() {
  return (
    <StyledEndActSection>
      <Row>
        As a U.S. territory, Puerto Rico has been dealt a marginalized form of
        representation in Congress. Unlike the 50 states, Puerto Rico has no
        voting power in the decisions that shape its future. Yet, Congress holds
        ultimate authority over the island, disregarding what any of the local
        Puerto Ricans have to say about the matter.
      </Row>
      <Image
        src="src/assets/images/content/PRProtest.jpg"
        alt="A protest in Puerto Rico"
      />
      <Row>
        This imbalance of power has paved the way for laws that primarily
        benefit U.S. investors at the cost of the well-being of native Puerto
        Ricans.
      </Row>
      {acts.map((act) => (
        <p key={act.id}>
          <Bold>{act.name} </Bold>
          {act.description}
        </p>
      ))}

      <ActSectionCTA />
    </StyledEndActSection>
  );
}
