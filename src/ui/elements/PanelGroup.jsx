import React, { useState } from "react";
import Panel from "./Panel";
import styled from "styled-components";
import Heading from "./Heading";

const StyledPanelGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: start;
  gap: 1rem;
  /* --panel-bg-color: var(--color-light-200);
  --panel-heading-color: var(--color-blue-200);
  --panel-color: var(--color-dark-200);
  --panel-box-color: var(--color-red-200);

  --panel-bg-highlight: var(--color-light-100);
  --panel-heading-highlight: var(--color-red-200);
  --panel-shadow-highlight: var(--color-blue-200);
  --panel-box-higlight: var(--color-red-300); */
`;

const StyledHeading = styled(Heading)`
  font-size: 2.45rem;
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

function PanelGroup({ menuItems, components, colors }) {
  const [isOpenName, setIsOpenName] = useState(null);

  function handleClick(i) {
    if (isOpenName !== i) setIsOpenName(i);
    else setIsOpenName(null);
  }

  console.log(components);
  return (
    <StyledPanelGroup>
      {menuItems.map((menuSection) => (
        <React.Fragment key={menuSection.label}>
          <StyledHeading as="h2" $colors={colors}>
            {menuSection.label}
          </StyledHeading>

          {menuSection.items.map((item) => (
            <Panel
              heading={item.label}
              key={item.label}
              onClick={() => handleClick(item.label)}
              isOpen={isOpenName === item.label}
              components={components[item.id]}
              colors={colors}
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
