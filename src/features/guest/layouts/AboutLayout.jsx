import PanelGroup from "../../../ui/elements/PanelGroup";
import Row from "../../../ui/elements/Row";
import Sidebar from "../../../ui/elements/Sidebar";
import { useState } from "react";
import { AboutColors } from "../../guest/layouts/aboutLayout.styles";
import styled, { css } from "styled-components";

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
      { id: 0, label: "Summary", link: "/about", content: "" },
      { id: 1, label: "Key Features", link: "/about", content: "" },
      { id: 2, label: "Tech Stack", link: "/about", content: "" },
    ],
  },
  {
    label: "The Process",
    link: "/about",
    items: [
      { id: 0, label: "Motivation", link: "/about", content: "" },
      { id: 1, label: "Challenges and Solutions", link: "/about", content: "" },
      { id: 2, label: "Lessons Learned", link: "/about", content: "" },
      { id: 3, label: "Future Enhancements", link: "/about", content: "" },
      { id: 4, label: "The Results", link: "/about", content: "" },
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
        onIsOpen={setIsOpen}
        colors={AboutColors}
      />
      <Sidebar menuItems={menuItems} setIsOpen={setIsOpen} isOpen={isOpen} />
    </StyledAboutLayout>
  );
}

export default AboutLayout;
