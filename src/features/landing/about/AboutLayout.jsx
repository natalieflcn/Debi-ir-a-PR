import PanelGroup from "../../../shared/components/layout/PanelGroup";

import Sidebar from "../../../shared/components/layout/Sidebar";
import { useState } from "react";
import { AboutColors } from "../../../styles/themes/aboutTheme";
import styled, { css } from "styled-components";

import Heading from "../../../shared/components/typography/Heading";

import Row from "../../../shared/components/layout/Row";
import Tile from "../../../shared/components/layout/Tile";
import aboutData from "./data/aboutData";

// Styled Components
const StyledAboutLayout = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
`;

// const StyledSidebar = styled(Sidebar)`
//   align-self: flex-end;
// `;

const menuItems = [
  {
    heading: "About Debí ir a Puerto Rico",
    link: "/about",
    sections: [
      {
        id: 0,
        heading: "Mission",
        link: "/about",
        content: (
          <Row>
            <Row $gap="0.5rem">
              <Heading>For Puerto Rico</Heading>
              <Tile
                $css={css`
                  background-color: white;
                `}
              >
                Debí ir a PR is a gamified scavenger hunt app designed to help
                people discover the hidden gems of Puerto Rico. Whether you’re a
                visitor seeking inspiration on where to go or a local wanting a
                fresh way to experience the island, the app transforms
                exploration into an adventure.
              </Tile>
            </Row>

            <Row $gap="0.5rem">
              <Heading>For Tourists</Heading>
              <Tile
                $css={css`
                  background-color: white;
                `}
              >
                By turning tourism into a game, it highlights overlooked
                destinations—beyond the usual beaches and resorts—encouraging
                users to create lasting memories through cultural landmarks,
                small businesses, and natural wonders.
              </Tile>
            </Row>

            <Row $gap="0.5rem">
              <Heading>For Puerto Ricans</Heading>
              <Tile
                $css={css`
                  background-color: white;
                `}
              >
                The app also empowers a team to continue designing and uploading
                more scavenger hunts for users. By curating new challenges
                around favorite spots, cultural traditions, or unique local
                experiences, these creators can showcase the Puerto Rico they
                love most. This not only helps promote hidden treasures across
                the island but also gives users a more authentic,
                community-driven way to explore.
              </Tile>
            </Row>
          </Row>
        ),
      },
      {
        id: 1,
        heading: "Key Features",
        link: "/about",
        content: (
          <Row $direction="horizontal" $gap="1rem">
            <Tile>
              As an Explorer
              <ul>
                <li>
                  Embark on unique scavenger hunts across Puerto Rico,
                  discovering hidden gems and cultural treasures.
                </li>
                <li>
                  Collect badges as you hit milestones, turning each journey
                  into a rewarding adventure.
                </li>
                <li>
                  Capture and upload photos to preserve your memories in a
                  personal gallery.
                </li>
                <li>
                  Share your experiences directly on social media to inspire
                  others to explore.
                </li>
              </ul>
            </Tile>
            <Tile>
              As a Team Member
              <ul>
                <li>
                  Design and launch engaging scavenger hunts to guide explorers
                  through meaningful experiences.
                </li>
                <li>
                  Highlight and promote local businesses, cultural landmarks,
                  and favorite hidden spots.
                </li>
              </ul>
            </Tile>
          </Row>
        ),
      },
      {
        id: 2,
        heading: "Tech Stack",
        link: "/about",
        content: (
          <Row>
            <Row $direction="horizontal">
              <Tile>React</Tile>
              <Tile>React Router</Tile>
              <Tile>React Icons</Tile>
              <Tile>node.js</Tile>
              <Tile>Express</Tile>
            </Row>
            <Row>
              <Heading>Third Party Libraries and Services</Heading>
              <Tile>
                <ul>
                  <li>React Router</li>
                  <li>React Icons</li>
                  <li>Mongoose</li>
                </ul>
              </Tile>
            </Row>
            <Row>
              <Heading>Architecture and Engineering Focus</Heading>
              <Tile>
                <ul>
                  <li>MVC System Architecture</li>
                  <li>
                    Google Maps API Integration (Interactive Map, Dynamic
                    Markers, InfoWindows, event handling)
                  </li>
                  <li>Modular code structure</li>
                </ul>
              </Tile>
            </Row>
          </Row>
        ),
      },
    ],
  },
  {
    heading: "The Process",
    link: "/about",
    sections: [
      {
        id: 0,
        heading: "Motivation",
        link: "/about",
        content: (
          <Row>
            <Row>
              I set out to solidify the skills I’ve been developing on my
              journey to becoming a full-stack developer, and I couldn’t think
              of a better way to hone my skills than by building something
              dedicated to the island I love.
            </Row>
            <Row>
              This project challenged me to bring together front-end design,
              back-end logic, and user experience into one cohesive product. It
              allowed me to move beyond tutorials and coding exercises, pushing
              me to apply my newfound knowledge in a real-world context while
              experimenting with creativity, problem-solving, and scalability.
            </Row>
            <Row>
              Debi ir a PR is inspired by my deep love for Puerto Rico, the
              island my father is from. I wanted to create something that
              celebrates its beauty while inviting others to participate in the
              same joy and connection I’ve been fortunate enough to experience.
            </Row>
            <Row>
              The design draws inspiration from Bad Bunny’s album DTmF (Debí
              Tirar Más Fotos), blending the vibrant colors from Puerto Rico’s
              flag and the rich essence of its landscapes to capture the spirit
              of the island.
            </Row>
          </Row>
        ),
      },
      {
        id: 1,
        heading: "Challenges and Solutions",
        link: "/about",
        content: "Coming Soon",
      },
      {
        id: 2,
        heading: "Lessons Learned",
        link: "/about",
        content: "Coming Soon",
      },
      { id: 3, heading: "The Results", link: "/about", content: "Coming Soon" },
    ],
  },
];

function AboutLayout() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <StyledAboutLayout>
      <PanelGroup
        menuSections={aboutData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        colors={AboutColors}
      />
      <Sidebar menuSections={aboutData} onIsOpen={setIsOpen} isOpen={isOpen} />
    </StyledAboutLayout>
  );
}

export default AboutLayout;
