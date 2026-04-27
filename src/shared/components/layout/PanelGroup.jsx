import React, { useEffect, useRef } from "react";
import Panel from "./Panel";
import styled from "styled-components";
import Heading from "../typography/Heading";

const StyledPanelGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  font-size: 1.1rem;
`;

const StyledHeading = styled(Heading)`
  font-size: 2.75rem;
  line-height: 2.85rem;
  scroll-margin-top: 9.5rem;
  color: ${({ $theme }) => $theme["--heading-color"]};
  text-shadow: 3px 3px 1px ${({ $theme }) => $theme["--heading-shadow"]};
  text-transform: uppercase;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  @media (max-width: 798px) {
    font-size: 1.8rem;
  }
`;

function PanelGroup({ menuSections, isOpen, setIsOpen, theme }) {
  const panelRefs = useRef({});
  const headingRefs = useRef({});

  // useEffect hook to scroll to panel – either if panel is opened from the PanelGroup or triggered from the Sidebar
  useEffect(
    function () {
      if (!isOpen) return;
      // Scrolls to panel that is opened from the sidebar

      if (panelRefs.current[isOpen]) {
        setTimeout(() => {
          panelRefs.current[isOpen].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 400);

        // Scrolls to heading that is triggered from the sidebar
      } else if (headingRefs.current[isOpen]) {
        console.log("working");
        headingRefs.current[isOpen].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    // smoothScrollTo(panelRefs.current[isOpen], 80, 1000); -- implement smooth scrolling in future

    [isOpen],
  );

  function handleClick(i) {
    if (isOpen !== i) {
      setIsOpen(i);
    } else setIsOpen(null);
  }

  function handleSidebarHeadingClick(heading) {
    console.log(heading);
    headingRefs.current[heading].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <StyledPanelGroup>
      {menuSections.map((menuSection) => (
        <React.Fragment key={menuSection.id}>
          <StyledHeading
            as="h2"
            $theme={theme}
            onClick={() => handleSidebarHeadingClick(menuSection.heading)}
            ref={(heading) =>
              (headingRefs.current[menuSection.heading] = heading)
            }
          >
            {menuSection.heading}
          </StyledHeading>

          {menuSection.sections.map((section) => {
            const Content = section.content;

            return (
              <Panel
                heading={section.heading}
                key={section.id}
                onClick={() => handleClick(section.heading)}
                isOpen={isOpen === section.heading}
                theme={theme}
                ref={(panel) => (panelRefs.current[section.section] = panel)}
              >
                <Content />
              </Panel>
            );
          })}
        </React.Fragment>
      ))}
    </StyledPanelGroup>
  );
}

export default PanelGroup;
