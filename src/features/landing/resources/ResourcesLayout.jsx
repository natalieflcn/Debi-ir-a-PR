import Sidebar from "../../../shared/components/Sidebar";
import Row from "../../../shared/components/Row";
import styled, { css } from "styled-components";
import PanelGroup from "../../../shared/components/PanelGroup";
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
  PuertoRicanNewsWrapper,
  OrganizationSection,
  ActCallToAction,
  SpanishWrapper,
} from "./resourcesLayout.styles";
import { useState } from "react";
import Heading from "../../../shared/components/typography/Heading";
import Button from "../../../shared/components/ui/Button";
import Link from "../../../shared/components/ui/Link";
import Image from "../../../shared/components/ui/Image";
import Bold from "../../../shared/components/typography/Bold";
import SmallText from "../../../shared/components/typography/SmallText";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Table from "../../../shared/components/ui/Table";
// Styled Components
const StyledResourcesLayout = styled.div`
  display: grid;
`;

const tableData = {
  columns: [
    {
      heading: "Spanish",
      key: "spanish",
      headingColor: "--color-red-200",
    },
    {
      heading: "English",
      key: "english",
      headingColor: "--color-blue-200",
    },
  ],
  rows: [
    { spanish: "Qué es la qué hay?", english: "What's up?" },
    { spanish: "Buen provecho!", english: "Enjoy your meal!" },
    { spanish: "Vamos a chincorrear!", english: "Let's go bar hopping!" },
    { spanish: "Diantre!", english: "Damn!" },
    { spanish: "En verdad?", english: "For real?" },
    { spanish: "Bonchinche", english: "Gossip" },
    { spanish: "Eso es embuste!", english: "That's a lie!" },
    { spanish: "Vamos a janguear!", english: "Let's hang out!" },
    { spanish: "Hay mucho tapón.", english: "There's a lot of traffic." },
    { spanish: "Nos vemos ahorita!", english: "We'll see each other soon!" },
  ],
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
        content: (
          <SpanishWrapper>
            <Row>
              Visiting the island soon? Brush up on your Spanish with this cheat
              sheet!
            </Row>
            <Table columns={tableData.columns} rows={tableData.rows}></Table>
            <Row>
              These are common words and phrases that you’ll hear in Puerto Rico
              or from the Puerto Rican diaspora.{" "}
            </Row>
          </SpanishWrapper>
        ),
      },
      {
        id: 1,
        label: "Dive into Puerto Rican History",
        link: "/resources",
        content: (
          <HistoryWrapper>
            <Row>
              Dive into Puerto Rico’s rich history and the journey of how this
              small, vibrant island has captured the world’s attention.
            </Row>

            <Row>
              <p>
                Known as <Bold>La Isla del Encanto</Bold> (The Island of
                Enchantment), Puerto Rico shines with beauty, culture, and
                passion–in spite of the profound challenges the island has
                survived. The joy, love, and unbreakable spirit of Puerto Ricans
                remain at the heart of the island’s identity.
              </p>
            </Row>
            <Row>
              Explore the stories of what Puerto Rico has endured and overcome
              throughout history.
            </Row>
            <Row $gap="1.5rem">
              <Row $gap="0.75rem">
                <Heading as="h3">Puerto Rico is Dying: Here's Why</Heading>
                <LiteYouTubeEmbed
                  id="6sPRFvWOBwo"
                  title="Puerto Rico is Dying: Here's Why"
                  lazyLoad={true}
                />
                <SmallText>
                  <Bold>Puerto Rico is paradise.</Bold> Beaches, lush mountains,
                  rich culture.
                </SmallText>
                <SmallText>
                  But beneath the beauty, there is pain that goes unseen. Nearly
                  half of the population lives below the poverty line – This
                  U.S. territory is the poorest, most unequal part of the United
                  States, and the gap between the wealthy and the poor continues
                  to grow.
                </SmallText>
                <SmallText>
                  A Puerto Rico without Puerto Ricans is near and this is the
                  story of why.
                </SmallText>
              </Row>

              <Row $gap="0.75rem">
                <Heading as="h3">How the U.S. Stole Puerto Rico</Heading>
                <LiteYouTubeEmbed
                  id="xb9E8fvMPOA"
                  title="How the U.S. Stole Puerto Rico"
                  lazyLoad={true}
                />
                <SmallText>
                  After nearly 400 years of Spanish rule, Puerto Ricans hoped
                  for liberation – instead, they became a colony of a foreign
                  power that didn’t even speak their language.
                </SmallText>
                <SmallText>
                  Surveillance, sabotage, and air strikes on its own citizens.
                </SmallText>
                <SmallText>
                  Unfold the history of how the United States stole and kept its
                  prized colony in the Caribbean – <Bold>Puerto Rico</Bold>.
                </SmallText>
              </Row>

              <Row $gap="0.75rem">
                <Heading as="h3">History of the Puerto Rican Flag</Heading>
                <LiteYouTubeEmbed
                  id="3KLMtxRxTCo"
                  title="History of the Puerto Rican Flag"
                  lazyLoad={true}
                />
                <SmallText>
                  Ever wonder why Puerto Ricans display their flag with such
                  unshakable pride?
                </SmallText>
                <SmallText>
                  Take a peek of the flag’s transformations—and why it will
                  always be waved with love and resilience.
                </SmallText>
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
                    <Image
                      src="src/assets/images/guest/WarAgainstAllPuertoRicansCover.png"
                      alt="War Against All Puerto Ricans"
                    />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/22928891-war-against-all-puerto-ricans"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">War Against All Puerto Ricans</Heading>
                    </Link>
                    <SmallText>
                      Through oral histories, personal interviews, eyewitness
                      accounts, congressional testimony, and recently
                      declassified FBI files, War Against All Puerto Ricans
                      tells the story of a forgotten revolution and its context
                      in Puerto Rico's history, from the US invasion in 1898 to
                      the modern-day struggle for self-determination.
                    </SmallText>
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/39791088-the-battle-for-paradise"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="src/assets/images/guest/TheBattleForParadiseCover.png"
                      alt="The Battle for Paradise"
                    />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/39791088-the-battle-for-paradise"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">The Battle for Paradise</Heading>
                    </Link>
                    <SmallText>
                      In the rubble of Hurricane Maria, Puerto Ricans and
                      ultrarich "Puertopians" are locked in a pitched struggle
                      over how to remake the island. In this investigation,
                      activist Naomi Klein uncovers how the forces of shock
                      politics and disaster capitalism seek to undermine the
                      nation's radical, resilient vision for a "just recovery."
                    </SmallText>
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/45156634-aftershocks-of-disaster"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="src/assets/images/guest/AftershocksOfDisasterCover.png"
                      alt="Aftershocks of Disaster"
                    />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/45156634-aftershocks-of-disaster"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">Aftershocks of Disaster</Heading>
                    </Link>
                    <SmallText>
                      No disaster is a singular event. Aftershocks of Disaster
                      examines the lasting effects of Hurricane Maria in Puerto
                      Rico, not just the effects of the wind or the rain, but
                      delving into what followed: state failure, social
                      abandonment, capitalization on human misery, and the
                      collective trauma produced by the botched response.
                    </SmallText>
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/8962015-matters-of-choice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="src/assets/images/guest/MattersOfChoiceCover.png"
                      alt="Matters of Choice"
                    />
                  </Link>
                  <figcaption>
                    <Link
                      href="https://www.goodreads.com/book/show/8962015-matters-of-choice"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heading as="h6">Matters of Choice</Heading>
                    </Link>
                    <SmallText>
                      Drawing upon her twenty-five years of research on
                      sterilized Puerto Rican women from five different families
                      in Brooklyn, Lopez...[weaves] together the voices of these
                      women, [and] she covers the history of sterilization and
                      eugenics, societal pressures to have fewer children, a
                      lack of adequate health care, patterns of gender
                      inequality, and misinformation provided by doctors and
                      family members.
                    </SmallText>
                  </figcaption>
                </HistoryBookSection>

                <HistoryBookSection>
                  <Link
                    href="https://www.goodreads.com/book/show/240619474-the-story-of-las-carpetas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="src/assets/images/guest/LasCarpetasCover.png"
                      alt="Las Carpetas"
                    />
                  </Link>
                  <figcaption>
                    <Heading as="h6">The Story of Las Carpetas</Heading>
                    <SmallText>
                      By exposing the systematic repression and chronicling the
                      resilience of individuals and families impacted, The Story
                      of Las Carpetas connects past injustices to today’s
                      ongoing battles for privacy and civil liberties. The
                      chilling parallels to modern-day surveillance reveal
                      lessons that resonate beyond Puerto Rico, highlighting a
                      universal struggle against invasive state powers.
                    </SmallText>
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
              While most people imagine Puerto Rico to be an island where
              there’s never a bad day to stretch on the beach, take a sip of
              coquito, and relax to the sound of coquis…
            </Row>
            <SlicedPhotos>
              <Image
                src="src/assets/images/guest/PuertoRicanParadise.jpg"
                alt="A beach on Puerto Rico"
              />
              <Image
                src="src/assets/images/guest/PRBlackout.jpg"
                alt="A blackout in Puerto Rico"
              />
            </SlicedPhotos>
            <Row>
              …Many communities are still living with the long-lasting effects
              of Hurricane María and the relentless storms that have followed.
              Frequent blackouts, abandoned homes, and rising costs of living
              continue to challenge the resilience of Puerto Ricans.
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
            <Row $gap="2.75rem">
              <OrganizationSection>
                <Link href="https://www.fcpr.org/">
                  <Image
                    src="src/assets/images/guest/FundacionComunitaria.png"
                    alt="Fundacion Comunitaria"
                    $width="9rem"
                    $css={css`
                      margin-right: 0.7rem;
                      align-self: flex-start;
                    `}
                  />
                </Link>
                <Row>
                  <Row $gap="0.5rem">
                    <Link href="https://www.fcpr.org/">
                      <Heading as="h6">
                        Fundación Comunitaria de Puerto Rico
                      </Heading>
                    </Link>
                    <SmallText>
                      Since 1985, this foundation has been dedicated to
                      fostering community development across the island. Working
                      with individuals, corporations, and nonprofits, they
                      support initiatives in housing, economic growth,
                      education, food and water access, and renewable energy.
                    </SmallText>
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
              </OrganizationSection>
              <OrganizationSection>
                <Link href="https://www.comedoressocialespr.org/">
                  <Image
                    src="src/assets/images/guest/ComedoresSociales.png"
                    alt="Comedores Sociales"
                    $width="9rem"
                    $css={css`
                      margin-right: 0.7rem;
                      align-self: flex-start;
                    `}
                  />
                </Link>
                <Row>
                  <Row $gap="0.5rem">
                    <Link href="https://www.comedoressocialespr.org/">
                      <Heading as="h6">
                        Comedores Sociales de Puerto Rico
                      </Heading>
                    </Link>
                    <SmallText>
                      This organization fights hunger and food insecurity by
                      taking a community-first approach. Through mutual aid
                      centers and community kitchens, they empower neighborhoods
                      to feed themselves and build resilience from the ground
                      up.
                    </SmallText>
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
              </OrganizationSection>
              <OrganizationSection>
                <Link href="https://www.prxpr.org/">
                  <Image
                    src="src/assets/images/guest/PRxPR.png"
                    alt="PRxPR"
                    $width="9rem"
                    $css={css`
                      margin-right: 0.7rem;
                      align-self: flex-start;
                    `}
                  />
                </Link>
                <Row>
                  <Row $gap="0.5rem">
                    <Link href="https://www.prxpr.org/">
                      <Heading as="h6">PRxPR</Heading>
                    </Link>
                    <SmallText>
                      Founded by Puerto Ricans in the diaspora after Hurricanes
                      María and Irma, PRxPR ensures that 100% of donations go
                      directly to affected communities. Their focus is on food
                      and agriculture, clean water, and renewable energy
                      projects that create long-term sustainability.
                    </SmallText>
                  </Row>
                  <Row
                    $direction="horizontal"
                    $gap="1rem"
                    $css="margin-bottom:1rem;"
                  >
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
              </OrganizationSection>
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
              As a U.S. territory, Puerto Rico has been dealt a marginalized
              form of representation in Congress. Unlike the 50 states, Puerto
              Rico has no voting power in the decisions that shape its future.
              Yet, Congress holds ultimate authority over the island,
              disregarding what any of the local Puerto Ricans have to say about
              the matter.
            </Row>
            <Image
              src="src/assets/images/guest/PRProtest.jpg"
              alt="A protest in Puerto Rico"
            />
            <Row>
              This imbalance of power has paved the way for laws that primarily
              benefit U.S. investors at the cost of the well-being of native
              Puerto Ricans.
            </Row>
            <Row>
              <p>
                <Bold>ACT 20</Bold> was introduced in 2012 to attract businesses
                by offering major tax incentives for companies exporting
                services from Puerto Rico to clients abroad in the states.
              </p>
            </Row>
            <Row>
              <p>
                <Bold>ACT 22</Bold> went even further—granting wealthy
                individuals who relocated to Puerto Rico a 100% tax exemption on
                passive income. While this offer is lucrative for investors,
                locals are left competing in a real estate market where property
                values and rents have skyrocketed, making homeownership and
                affordable housing increasingly out of reach.
              </p>
            </Row>
            <Row>
              <p>
                <Bold>ACT 60</Bold> consolidated these laws in 2019 to allow
                wealthy non-residents to dramatically cut their tax burdens,
                paying far less in taxes than native Puerto Ricans. While framed
                as economic development, much of this wealth never reaches local
                communities. Instead, it accelerates gentrification, deepens
                inequality, and intensifies the housing crisis.
              </p>
            </Row>
            <ActCallToAction>
              <Image
                src="src/assets/images/guest/PRxDC.jpg"
                alt="A Puerto Rican flag"
                $width="43%"
                $css={css`
                  margin-right: 1.25rem;
                `}
              />
              <Row>
                <Heading as="h5">So, now what?</Heading>

                <Bold>What can we do?</Bold>

                <p>
                  We can continue spreading awareness about the harm these laws
                  cause to Puerto Rican families.
                </p>
                <p>
                  And we can take action—starting with these petitions to ensure
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
            </ActCallToAction>
          </EndActWrapper>
        ),
      },
      {
        id: 4,
        label: "Keep Up with Puerto Rican News",
        link: "/resources",
        content: (
          <PuertoRicanNewsWrapper>
            <Image
              src="src/assets/images/guest/SanJuan.jpg"
              alt="Old San Juan buildings"
            />

            <Row>
              <Heading as="h6">
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
      <Row $direction="horizontal" $gap="2rem">
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
