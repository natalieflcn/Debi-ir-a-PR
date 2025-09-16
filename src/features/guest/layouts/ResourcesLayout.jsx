import Sidebar from "../../../ui/elements/Sidebar";
import Row from "../../../ui/elements/Row";
import styled, { css } from "styled-components";
import PanelGroup from "../../../ui/elements/PanelGroup";
import {
  CharityOrganizationsWrapper,
  EndActWrapper,
  HistoryBookSection,
  HistoryFrame,
  HistorySpinnerMini,
  HistoryVideoSection,
  HistoryWrapper,
  ResourcesColors,
  SlicedPhotos,
} from "../../guest/layouts/resourcesLayout.styles";
import { useState } from "react";
import Heading from "../../../ui/elements/Heading";
import Button from "../../../ui/elements/Button";
import Link from "../../../ui/elements/Link";
import { PuertoRicanNewsWrapper } from "./resourcesLayout.styles";
import Image from "../../../ui/elements/Image";
import Bold from "../../../ui/elements/Bold";

// Styled Components
const StyledResourcesLayout = styled.div`
  display: grid;
`;

// Helper Components
const LoadingFrame = function ({ src, ...props }) {
  const [isLoadingFrame, setIsLoadingFrame] = useState(true);

  return (
    <HistoryVideoSection $isLoadingFrame={isLoadingFrame}>
      {isLoadingFrame && <HistorySpinnerMini />}
      <HistoryFrame
        src={src}
        onLoad={() => setIsLoadingFrame(false)}
        $isLoadingFrame={isLoadingFrame}
        {...props}
      ></HistoryFrame>
    </HistoryVideoSection>
  );
};

// Content
const menuItems = [
  {
    label: "Learn More About the Island",
    link: "/resources",
    items: [
      {
        id: 0,
        label: "Brush Up on Your Spanish",
        link: "/resources",
        content: "This panel teaches your Boricua Spanish",
      },
      {
        id: 1,
        label: "Dive into Puerto Rican History",
        link: "/resources",
        content: (
          <HistoryWrapper>
            <Row>
              <Row>
                Dive into Puerto Rico’s rich history and the journey of how this
                small, vibrant island has captured the world’s attention.
              </Row>
              <Row>
                <p>
                  Known as <Bold>La Isla del Encanto</Bold> (The Island of
                  Enchantment), Puerto Rico shines with beauty, culture, and
                  passion–in spite of the profound challenges the island has
                  survived. The joy, love, and unbreakable spirit of Puerto
                  Ricans remain at the heart of the island’s identity.
                </p>
              </Row>
              <Row>
                Explore the stories of what Puerto Rico has endured and overcome
                throughout history.
              </Row>

              <Row>
                <Heading as="h3">Puerto Rico is Dying: Here's Why</Heading>
                <LoadingFrame src="https://www.youtube.com/embed/6sPRFvWOBwo" />
                <p>
                  <Bold>Puerto Rico is paradise.</Bold> Beaches, lush mountains,
                  rich culture.
                </p>
                <p>
                  But beneath the beauty, there is pain that goes unseen. Nearly
                  half of the population lives below the poverty line – This
                  U.S. territory is the poorest, most unequal part of the United
                  States, and the gap between the wealthy and the poor continues
                  to grow.
                </p>
                <p>
                  A Puerto Rico without Puerto Ricans is near and this is the
                  story of why.
                </p>
              </Row>

              <Row>
                <Heading as="h3">How the U.S. Stole Puerto Rico</Heading>
                <LoadingFrame src="https://www.youtube.com/embed/xb9E8fvMPOA" />
                <p>
                  After nearly 400 years of Spanish rule, Puerto Ricans hoped
                  for liberation – instead, they became a colony of a foreign
                  power that didn’t even speak their language.
                </p>
                <p>
                  Surveillance, sabotage, and air strikes on its own citizens.
                </p>
                <p>
                  Unfold the history of how the United States stole and kept its
                  prized colony in the Caribbean – <Bold>Puerto Rico</Bold>.
                </p>
              </Row>

              <Row>
                <Heading as="h3">History of the Puerto Rican Flag</Heading>
                <LoadingFrame src="https://www.youtube.com/embed/3KLMtxRxTCo" />
                <p>
                  Ever wonder why Puerto Ricans display their flag with such
                  unshakable pride?
                </p>
                <p>
                  Take a peek of the flag’s transformations—and why it will
                  always be waved with love and resilience.
                </p>
              </Row>

              <Row>
                <Heading as="h3">Additional Literature</Heading>
                <p>
                  If you’re interested in learning more about Puerto Rico’s
                  struggles and the resilience of its people, these books honor
                  their strength and perseverance.
                </p>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/22928891-war-against-all-puerto-ricans"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="src/assets/images/guest/WarAgainstAllPuertoRicansCover.png" />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/22928891-war-against-all-puerto-ricans"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">War Against All Puerto Ricans</Heading>
                    </Link>
                    <p>
                      Through oral histories, personal interviews, eyewitness
                      accounts, congressional testimony, and recently
                      declassified FBI files, War Against All Puerto Ricans
                      tells the story of a forgotten revolution and its context
                      in Puerto Rico's history, from the US invasion in 1898 to
                      the modern-day struggle for self-determination.
                    </p>
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/39791088-the-battle-for-paradise"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="src/assets/images/guest/TheBattleForParadiseCover.png" />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/39791088-the-battle-for-paradise"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">The Battle for Paradise</Heading>
                    </Link>
                    In the rubble of Hurricane Maria, Puerto Ricans and
                    ultrarich "Puertopians" are locked in a pitched struggle
                    over how to remake the island. In this investigation,
                    activist Naomi Klein uncovers how the forces of shock
                    politics and disaster capitalism seek to undermine the
                    nation's radical, resilient vision for a "just recovery."
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/45156634-aftershocks-of-disaster"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="src/assets/images/guest/AftershocksOfDisasterCover.png" />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/45156634-aftershocks-of-disaster"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">Aftershocks of Disaster</Heading>
                    </Link>
                    No disaster is a singular event. Aftershocks of Disaster
                    examines the lasting effects of Hurricane Maria in Puerto
                    Rico, not just the effects of the wind or the rain, but
                    delving into what followed: state failure, social
                    abandonment, capitalization on human misery, and the
                    collective trauma produced by the botched response.
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/8962015-matters-of-choice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="src/assets/images/guest/MattersOfChoiceCover.png" />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/8962015-matters-of-choice"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">Matters of Choice</Heading>
                    </Link>
                    Drawing upon her twenty-five years of research on sterilized
                    Puerto Rican women from five different families in Brooklyn,
                    Lopez...[weaves] together the voices of these women, [and]
                    she covers the history of sterilization and eugenics,
                    societal pressures to have fewer children, a lack of
                    adequate health care, patterns of gender inequality, and
                    misinformation provided by doctors and family members.
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/240619474-the-story-of-las-carpetas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="src/assets/images/guest/LasCarpetasCover.png" />
                  </Link>
                  <figcaption>
                    <Heading as="h6">The Story of Las Carpetas</Heading>By
                    exposing the systematic repression and chronicling the
                    resilience of individuals and families impacted, The Story
                    of Las Carpetas connects past injustices to today’s ongoing
                    battles for privacy and civil liberties. The chilling
                    parallels to modern-day surveillance reveal lessons that
                    resonate beyond Puerto Rico, highlighting a universal
                    struggle against invasive state powers.
                  </figcaption>
                </HistoryBookSection>
              </Row>
            </Row>
          </HistoryWrapper>
        ),
      },
    ],
  },
  {
    label: "Support the Island",
    link: "/resources",
    items: [
      {
        id: 2,
        label: "Donate to Puerto Rican Organizations",
        link: "/resources",
        content: (
          <CharityOrganizationsWrapper>
            <Row>
              While most people imagine Puerto Rico to be a tropical paradise;
              an island where there’s never a bad day to stretch on the beach,
              take a sip of coquito, and relax to the sound of coquis…
            </Row>
            <SlicedPhotos>
              <img src="src/assets/images/guest/PuertoRicanParadise.jpg" />
              <img src="src/assets/images/guest/PRBlackout.jpg" />
            </SlicedPhotos>
            <Row>
              Many communities are still living with the long-lasting effects of
              Hurricane María and the relentless storms that have followed.
              Frequent blackouts, abandoned homes, rising costs of living, and
              an unlivable minimum wage continue to challenge the resilience of
              Puerto Ricans.
            </Row>
            <Row>
              <Bold>
                The island may have the world’s admiration, but it also needs
                the world’s support.
              </Bold>
            </Row>
            <Row>
              Here are some organizations making a direct impact, where your
              donation can truly help:
            </Row>
            <Row $gap="3rem">
              <Row $direction="horizontal">
                <Link href="https://www.fcpr.org/">
                  <Image
                    src="src/assets/images/guest/FundacionComunitaria.png"
                    $width="9rem"
                    $css={css`
                      margin-right: 1.5rem;
                      align-self: flex-start;
                    `}
                  />
                </Link>
                <Row>
                  <Row $gap="0.25rem">
                    <Link href="https://www.fcpr.org/">
                      <Heading
                        as="h5"
                        $css={css`
                          color: var(--color-red-300);
                        `}
                      >
                        Fundación Comunitaria de Puerto Rico
                      </Heading>
                    </Link>
                    <p>
                      Since 1985, this foundation has been dedicated to
                      fostering community development across the island. Working
                      with individuals, corporations, and nonprofits, they
                      support initiatives in housing, economic growth,
                      education, food and water access, and renewable energy.
                    </p>
                  </Row>
                  <Row $direction="horiztonal" $gap="1rem">
                    <Link href="https://www.fcpr.org/donations/donate-now/">
                      <Button $size="large" $variation="primary">
                        Donate Now
                      </Button>
                    </Link>
                    <Link href="https://www.obama.org/programs/my-brothers-keeper-alliance/about/communities-were-serving/puerto-rico-community-foundation/">
                      <Button $size="large" $variation="secondary">
                        Learn More
                      </Button>
                    </Link>
                  </Row>
                </Row>
              </Row>
              <Row $direction="horizontal">
                <Link href="https://www.comedoressocialespr.org/">
                  <Image
                    src="src/assets/images/guest/ComedoresSociales.png"
                    $width="9rem"
                    $css={css`
                      margin-right: 1.5rem;
                      align-self: flex-start;
                    `}
                  />
                </Link>
                <Row>
                  <Row $gap="0.25rem">
                    <Link href="https://www.comedoressocialespr.org/">
                      <Heading
                        as="h5"
                        $css={css`
                          color: var(--color-red-300);
                        `}
                      >
                        Comedores Sociales de Puerto Rico
                      </Heading>
                    </Link>
                    <p>
                      This organization fights hunger and food insecurity by
                      taking a community-first approach. Through mutual aid
                      centers and community kitchens, they empower neighborhoods
                      to feed themselves and build resilience from the ground
                      up.
                    </p>
                  </Row>
                  <Row $direction="horizontal" $gap="1rem">
                    <Link href="https://www.gofundme.com/charity/comedores-sociales-de-puerto-rico-inc/donate">
                      <Button $size="large" $variation="primary">
                        Donate Now
                      </Button>
                    </Link>
                    <Link href="https://comedoressocialesdepuertorico.pro/">
                      <Button $size="large" $variation="secondary">
                        Learn More
                      </Button>
                    </Link>
                  </Row>
                </Row>
              </Row>
              <Row $direction="horizontal">
                <Link href="https://www.prxpr.org/">
                  <Image
                    src="src/assets/images/guest/PRxPR.png"
                    $width="9rem"
                    $css={css`
                      margin-right: 1.5rem;
                      align-self: flex-start;
                    `}
                  />
                </Link>
                <Row>
                  <Row $gap="0.25rem">
                    <Link href="https://www.prxpr.org/">
                      <Heading
                        as="h5"
                        $css={css`
                          color: var(--color-red-300);
                        `}
                      >
                        PRxPR
                      </Heading>
                    </Link>
                    <p>
                      Founded by Puerto Ricans in the diaspora after Hurricanes
                      María and Irma, PRxPR ensures that 100% of donations go
                      directly to affected communities. Their focus is on food
                      and agriculture, clean water, and renewable energy
                      projects that create long-term sustainability.
                    </p>
                  </Row>
                  <Row $direction="horizontal" $gap="1rem">
                    <Link href="https://fundly.com/prxpr">
                      <Button $size="large" $variation="primary">
                        Donate Now
                      </Button>
                    </Link>
                    <Link href="https://www.prxpr.org/funds-at-work/">
                      <Button $size="large" $variation="secondary">
                        Learn More
                      </Button>
                    </Link>
                  </Row>
                </Row>
              </Row>
            </Row>
          </CharityOrganizationsWrapper>
        ),
      },
      {
        id: 3,
        label: "End Act 20-22-60",
        link: "/resources",
        content: (
          <EndActWrapper>
            <Row>
              As a U.S. territory, Puerto Rico has been dealt a marginalized and
              unequal form of representation in Congress. Unlike the 50 states,
              Puerto Rico has no voting power in the decisions that directly
              shape its future. Yet, Congress holds ultimate authority over the
              island and can override its laws, disregarding what any of the
              local Puerto Ricans have to say about the matter.
            </Row>
            <Image src="src/assets/images/guest/PRProtest.jpg" />
            <Row>
              This imbalance of power has paved the way for laws that primarily
              benefit U.S. investors at the cost of the well-being of native
              Puerto Ricans.
            </Row>
            <Row>
              <p>
                <Bold>In 2012, Act 20</Bold> was introduced to attract
                businesses by offering major tax incentives for companies
                exporting services from Puerto Rico to clients abroad in the
                states.
              </p>
            </Row>
            <Row>
              <p>
                <Bold>Act 22</Bold> went even further—granting wealthy
                individuals who relocated to Puerto Rico a 100% tax exemption on
                passive income from interest, dividends, and capital gains.
                While this offer is lucrative for investors, it has been heavily
                criticized for driving up housing prices, fueling displacement,
                and worsening inequality amongst the natives. Locals are left
                competing in a real estate market where property values and
                rents have skyrocketed, making homeownership and affordable
                housing increasingly out of reach.
              </p>
            </Row>
            <Row>
              <p>
                <Bold>Now combined under Act 60 in 2019</Bold>, these laws allow
                wealthy non-residents to dramatically cut their tax burdens,
                paying far less in taxes than native Puerto Ricans. While framed
                as economic development, much of this wealth never reaches local
                communities. Instead, it accelerates gentrification, deepens
                inequality, and intensifies the housing crisis.
              </p>
            </Row>
            <Row $direction="horiztonal">
              <Image
                src="src/assets/images/guest/PRxDC.jpg"
                $width="43%"
                $css={css`
                  margin-right: 1.25rem;
                `}
              />
              <Row>
                <Heading as="h5" $css={{ color: css`var(--color-red-300)` }}>
                  So, now what?
                </Heading>
                <p>
                  <Bold>What can we do?</Bold>
                </p>
                <p>
                  We can continue spreading awareness about the harm these laws
                  cause to Puerto Rican families.
                </p>
                <p>
                  And we can take action—starting with this petition to ensure
                  the island can be heard.
                </p>
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
            </Row>
          </EndActWrapper>
        ),
      },
      {
        id: 4,
        label: "Keep Up with Puerto Rican News",
        link: "/resources",
        content: (
          <PuertoRicanNewsWrapper>
            <Image src="src/assets/images/guest/SanJuan.jpg" />

            <Row>
              <Heading
                as="h6"
                $css={css`
                  color: var(--color-red-400);
                  text-transform: none;
                `}
              >
                Want to stay up to date about what’s going on in Puerto Rico?
              </Heading>
              <p>
                Keep up with the latest news, breaking stories, and more about
                the island.
              </p>
              <p>
                From cultural highlights and community efforts to political
                developments and ongoing challenges, staying informed helps us
                better understand Puerto Rico’s reality and support its people.
              </p>
              <Link href="https://www.the-independent.com/topic/puerto-rico">
                <Button $size="large" $variation="secondary">
                  Visit Independent News
                </Button>
              </Link>
            </Row>
          </PuertoRicanNewsWrapper>
        ),
      },
    ],
  },
];

function ResourcesLayout() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <StyledResourcesLayout>
      <Row $direction="horizontal">
        <Sidebar menuItems={menuItems} isOpen={isOpen} onIsOpen={setIsOpen} />
        <PanelGroup
          menuItems={menuItems}
          colors={ResourcesColors}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </Row>
    </StyledResourcesLayout>
  );
}

export default ResourcesLayout;

// hyperlink heading and photos with organization info
// fix diving into pr history
// begin creating about page
