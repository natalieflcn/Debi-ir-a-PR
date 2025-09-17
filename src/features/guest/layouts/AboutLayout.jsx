import PanelGroup from "../../../ui/elements/PanelGroup";
import Row from "../../../ui/elements/Row";
import Sidebar from "../../../ui/elements/Sidebar";
import { useState } from "react";
import { AboutColors } from "../../guest/layouts/aboutLayout.styles";
import styled from "styled-components";

// Styled Components
const StyledAboutLayout = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
`;

const StyledSidebar = styled(Sidebar)`
  align-self: flex-end;
`;
// Content
const menuItems = [
  {
    label: "About Debí ir a Puerto Rico",
    link: "/about",
    items: [
      {
        id: 0,
        label: "Summary",
        link: "/about",
        content: (
          <>
            <Row>
              Debí ir a PR is a gamified scavenger hunt app designed to help
              people discover the hidden gems of Puerto Rico. Whether you’re a
              visitor seeking inspiration on where to go or a local wanting a
              fresh way to experience the island, the app transforms exploration
              into an adventure. By turning tourism into a game, it highlights
              overlooked destinations—beyond the usual beaches and
              resorts—encouraging users to create lasting memories through
              cultural landmarks, small businesses, and natural wonders.
            </Row>
            <Row>
              The app also empowers a team to continue designing and uploading
              more scavenger hunts for users. By curating new challenges around
              favorite spots, cultural traditions, or unique local experiences,
              these creators can showcase the Puerto Rico they love most. This
              not only helps promote hidden treasures across the island but also
              gives users a more authentic, community-driven way to explore.
            </Row>
          </>
        ),
      },
      {
        id: 1,
        label: "Key Features",
        link: "/about",
        content: (
          <>
            <Row>
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
            </Row>
            <Row>
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
            </Row>
          </>
        ),
      },
      {
        id: 2,
        label: "Tech Stack",
        link: "/about",
        content: (
          <>
            <Row>React</Row>
            <Row>React Router</Row>
            <Row>React Icons</Row>
            <Row>node.js</Row>
            <Row>Express</Row>
          </>
        ),
      },
    ],
  },
  {
    label: "The Process",
    link: "/about",
    items: [
      {
        id: 0,
        label: "Motivation",
        link: "/about",
        content: (
          <>
            <Row>
              I set out to solidify the skills I’ve been developing on my
              journey to becoming a full-stack developer, and I couldn’t think
              of a better way to hone my skills than by building something
              dedicated to the island I love. This project challenged me to
              bring together front-end design, back-end logic, and user
              experience into one cohesive product. It allowed me to move beyond
              tutorials and coding exercises, pushing me to apply my newfound
              knowledge in a real-world context while experimenting with
              creativity, problem-solving, and scalability.
            </Row>
            <Row>
              Debi ir a PR is inspired by my deep love for Puerto Rico, the
              island my father is from. I wanted to create something that
              celebrates its beauty while inviting others to participate in the
              same joy and connection I’ve been fortunate enough to experience.
              The design draws inspiration from Bad Bunny’s album DTmF (Debí
              Tirar Más Fotos), blending the vibrant colors from Puerto Rico’s
              flag and the rich essence of its landscapes to capture the spirit
              of the island.
            </Row>
          </>
        ),
      },
      {
        id: 1,
        label: "Challenges and Solutions",
        link: "/about",
        content: "Coming Soon",
      },
      {
        id: 2,
        label: "Lessons Learned",
        link: "/about",
        content: "Coming Soon",
      },
      {
        id: 3,
        label: "Future Enhancements",
        link: "/about",
        content: "Coming Soon",
      },
      { id: 4, label: "The Results", link: "/about", content: "Coming Soon" },
    ],
  },
];

function AboutLayout() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <StyledAboutLayout>
      <PanelGroup
        menuItems={menuItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        colors={AboutColors}
      />
      <Sidebar menuItems={menuItems} onIsOpen={setIsOpen} isOpen={isOpen} />
    </StyledAboutLayout>
  );
}

export default AboutLayout;
