import React, { useEffect, useRef } from "react";
import Panel from "./Panel";
import styled from "styled-components";
import Heading from "../typography/Heading";

const StyledPanelGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  gap: 1rem;
  font-size: var(--font-size-sm);

  @media (max-width: 1000px) {
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    /* width: 100%; */
    align-items: center;
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
    /* width: 100%; */
  }
`;

const StyledHeading = styled(Heading)`
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-3xl);
  text-transform: uppercase;

  scroll-margin-top: 9.5rem;

  color: ${({ $theme }) => $theme.headingColor};
  text-shadow: var(--text-shadow-offset-lg)
    ${({ $theme }) => $theme.headingShadow};

  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  @media (max-width: 1200px) {
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-2xl);
  }

  @media (max-width: 800px) {
    text-align: center;
    max-width: 90%;
  }

  @media (max-width: 600px) {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
`;

function PanelGroup({ menuSections, isOpen, setIsOpen, theme }) {
  const panelRefs = useRef({});
  const headingRefs = useRef({});

  // useEffect hook to scroll to panel – either if panel is opened from the PanelGroup or triggered from the Sidebar
  useEffect(
    function () {
      if (!isOpen) return;

      // only handles scrolling to section headings triggered from sidebar
      if (headingRefs.current[isOpen]) {
        headingRefs.current[isOpen].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // panel scroll is now handled by Panel's own IntersectionObserver
    },
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

          {menuSection.sections.map((section, index) => {
            const Content = section.content;

            return (
              <Panel
                key={section.id}
                heading={section.heading}
                isOpen={isOpen === section.heading}
                onClick={() => handlePanelGroupHeadingClick(section.heading)}
                theme={theme}
                index={index}
                ref={(panel) => (panelRefs.current[section.section] = panel)}
              >
                <Content theme={theme} />
              </Panel>
            );
          })}
        </React.Fragment>
      ))}
    </StyledPanelGroup>
  );
}

export default PanelGroup;
