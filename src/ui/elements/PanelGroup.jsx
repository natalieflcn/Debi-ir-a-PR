import React, { useEffect, useRef, useState } from "react";
import Panel from "./Panel";
import styled from "styled-components";
import Heading from "./Heading";

const StyledPanelGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
`;

const StyledHeading = styled(Heading)`
  font-size: 2.45rem;
  scroll-margin-top: 9.5rem;
  color: ${({ $colors }) => $colors["--heading-color"]};
  text-shadow: 3px 2px 1px ${({ $colors }) => $colors["--heading-shadow"]};
  text-transform: uppercase;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  @media (max-width: 798px) {
    font-size: 1.8rem;
  }
`;

function PanelGroup({ menuItems, isOpen, setIsOpen, colors }) {
  const panelRefs = useRef({});
  const headingRefs = useRef({});

  // useEffect hook to scroll to panel – either if panel is opened from the PanelGroup or triggered from the Sidebar
  useEffect(
    function () {
      if (isOpen) {
        // Scrolls to panel that is opened from the sidebar
        if (panelRefs.current[isOpen]) {
          panelRefs.current[isOpen].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Scrolls to heading that is triggered from the sidebar
        } else if (headingRefs.current[isOpen]) {
          console.log("working");
          headingRefs.current[isOpen].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
      // smoothScrollTo(panelRefs.current[isOpen], 80, 1000); -- implement smooth scrolling in future
    },
    [isOpen]
  );

  function handleClick(i) {
    if (isOpen !== i) {
      setIsOpen(i);
    } else setIsOpen(null);
  }

  function handleSidebarHeadingClick(label) {
    console.log(label);
    headingRefs.current[label].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <StyledPanelGroup>
      {menuItems.map((menuSection) => (
        <React.Fragment key={menuSection.label}>
          <StyledHeading
            as="h2"
            $colors={colors}
            onClick={() => handleSidebarHeadingClick(menuSection.label)}
            ref={(heading) =>
              (headingRefs.current[menuSection.label] = heading)
            }
          >
            {menuSection.label}
          </StyledHeading>

          {menuSection.items.map((item) => (
            <Panel
              heading={item.label}
              key={item.label}
              onClick={() => handleClick(item.label)}
              isOpen={isOpen === item.label}
              colors={colors}
              ref={(panel) => (panelRefs.current[item.label] = panel)}
            >
              {item.content}
            </Panel>
          ))}
        </React.Fragment>
      ))}
    </StyledPanelGroup>
  );
}

export default PanelGroup;
