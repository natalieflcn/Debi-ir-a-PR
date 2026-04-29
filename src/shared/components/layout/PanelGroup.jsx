import React, { useEffect, useRef } from "react";
import Panel from "./Panel";
import styled from "styled-components";
import Heading from "../typography/Heading";

const StyledPanelGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  font-size: var(--font-size-sm);
`;

const StyledHeading = styled(Heading)`
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-3xl);
  text-transform: uppercase;

  scroll-margin-top: 9.5rem;

  color: ${({ $theme }) => $theme.headingColor};
  text-shadow: var(--text-shadow-lg) ${({ $theme }) => $theme.headingShadow};

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

  function handlePanelGroupHeadingClick(menuSection) {
    if (isOpen !== menuSection) {
      setIsOpen(menuSection);
    } else setIsOpen(null);
  }

  function handleSidebarHeadingClick(menuSection) {
    headingRefs.current[menuSection].scrollIntoView({
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
            onClick={() => handleSidebarHeadingClick(menuSection.heading)}
            ref={(heading) =>
              (headingRefs.current[menuSection.heading] = heading)
            }
            $theme={theme}
          >
            {menuSection.heading}
          </StyledHeading>

          {menuSection.sections.map((section) => {
            const Content = section.content;

            return (
              <Panel
                key={section.id}
                heading={section.heading}
                isOpen={isOpen === section.heading}
                onClick={() => handlePanelGroupHeadingClick(section.heading)}
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
