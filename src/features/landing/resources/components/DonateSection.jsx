import styled, { css } from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import { SlicedPhotos } from "../resourcesLayout.styles";
import Bold from "../../../../shared/components/typography/Bold";
import Link from "../../../../shared/components/ui/Link";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import Button from "../../../../shared/components/ui/Button";

const organizations = [
  {
    id: "fcpr",
    name: "Fundación de Puerto Rico",
    logo: "src/assets/images/content/FundacionComunitaria.png",
    website: "https://www.fcpr.org/",
    donate: "https://www.fcpr.org/donations/donate-now/",
    learnMore:
      "https://www.obama.org/programs/my-brothers-keeper-alliance/about/communities-were-serving/puerto-rico-community-foundation/",
    description:
      "Since 1985, this foundation has been dedicated to fostering community development across the island. Working with individuals, corporations, and nonprofits, they support initiatives in housing, economic growth,education, food and water access, and renewable energy.",
  },
  {
    id: "cspr",
    name: "Comedores Sociales de Puerto Rico",
    logo: "src/assets/images/content/ComedoresSociales.png",
    website: "https://www.comedoressocialespr.org/",
    donate:
      "https://www.gofundme.com/charity/comedores-sociales-de-puerto-rico-inc/donate",
    learnMore: "https://comedoressocialesdepuertorico.pro/",
    description:
      "This organization fights hunger and food insecurity by taking a community-first approach. Through mutual aid centers and community kitchens, they empower neighborhoods to feed themselves and build resilience from the ground up.",
  },
  {
    id: "prxpr",
    name: "PRxPR",
    logo: "src/assets/images/content/PRxPR.png",
    website: "https://www.prxpr.org/",
    donate: "https://fundly.com/prxpr",
    learnMore: "https://www.prxpr.org/funds-at-work/",
    description:
      "Founded by Puerto Ricans in the diaspora after Hurricanes María and Irma, PRxPR ensures that 100% of donations go directly to affected communities. Their focus is on food and agriculture, clean water, and renewable energy projects that create long-term sustainability.",
  },
];

const StyledDonateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h6 {
    color: var(--color-red-300);
  }

  @media (max-width: 798px) {
    img {
      width: 97%;
      margin-right: 0;
    }
  }
`;

const StyledOrganization = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;

    div {
      flex-direction: column;
      align-items: normal;
    }
  }
`;

const Introduction = function () {
  return (
    <>
      <Row>
        While most people imagine Puerto Rico to be an island where there’s
        never a bad day to stretch on the beach, take a sip of coquito, and
        relax to the sound of coquis…
      </Row>

      <SlicedPhotos>
        <Image
          src="src/assets/images/content/PuertoRicanParadise.jpg"
          alt="A beach on Puerto Rico"
        />
        <Image
          src="src/assets/images/content/PRBlackout.jpg"
          alt="A blackout in Puerto Rico"
        />
      </SlicedPhotos>
      <Row>
        …Many communities are still living with the long-lasting effects of
        Hurricane María and the relentless storms that have followed. Frequent
        blackouts, abandoned homes, and rising costs of living continue to
        challenge the resilience of Puerto Ricans.
      </Row>
      <Row>
        <Bold>
          The island may have the world’s admiration, but it also needs the
          world’s support.
        </Bold>
      </Row>
      <Row>
        Here are some organizations making a direct impact, where your donation
        can truly help:
      </Row>
    </>
  );
};

export default function DonateSection() {
  return (
    <StyledDonateSection>
      <Introduction />
      <Row $gap="2.75rem">
        {organizations.map((organization) => (
          <StyledOrganization key={organization.id}>
            <Link href={organization.website}>
              <Image
                src={organization.logo}
                alt={organization.name}
                $width="9rem"
                $css={css`
                  margin-right: 0.7rem;
                  align-self: flex-start;
                `}
              />
            </Link>
            <Row>
              <Row $gap="0.5rem">
                <Link href={organization.website}>
                  <Heading as="h6">{organization.name}</Heading>
                </Link>
                <SmallText>{organization.description}</SmallText>
              </Row>
              <Row
                $direction="horizontal"
                $gap="1rem"
                $css="margin-bottom:1rem;"
              >
                <Link href={organization.donate}>
                  <Button $size="large" $variation="primary">
                    Donate Now
                  </Button>
                </Link>
                <Link href={organization.learnMore}>
                  <Button $size="large" $variation="secondary">
                    Learn More
                  </Button>
                </Link>
              </Row>
            </Row>
          </StyledOrganization>
        ))}
      </Row>
    </StyledDonateSection>
  );
}
