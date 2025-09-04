import Sidebar from "../../ui/elements/Sidebar";
import Row from "../../ui/elements/Row";
import styled from "styled-components";
import Panel from "../../ui/elements/Panel";
import React from "react";
import Heading from "../../ui/elements/Heading";

const StyledResourcesLayout = styled.div`
  display: grid;
`;

const StyledPanels = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: start;
  gap: 1rem;
  --panel-bg-color: var(--color-light-200);
  --panel-heading-color: var(--color-blue-200);
  --panel-color: var(--color-dark-200);

  --panel-bg-highlight: var(--color-light-100);
  --panel-heading-highlight: var(--color-red-200);
  --panel-shadow-highlight: var(--color-blue-200);
  --panel-shadow: var(--color-red-300);
`;

const StyledHeading = styled(Heading)`
  margin-top: 1rem;
  color: var(--color-yellow-200);
  text-shadow: 3px 2px 1px var(--color-red-300);
`;

const menuItems = [
  {
    label: "Learn More About the Island",
    link: "/resources",
    items: [
      { label: "Brush Up on Your Spanish", link: "/resources" },
      {
        label: "Dive into Puerto Rican History",
        link: "/resources",
      },
    ],
  },
  {
    label: "Support the Island",
    link: "/resources",
    items: [
      {
        label: "Donate to Puerto Rican Organizations",
        link: "/resources",
      },
      { label: "Sign Petition", link: "/resources" },
      {
        label: "Keep Up with Puerto Rican News",
        link: "/resources",
      },
    ],
  },
];

//need to fix sidebar and how chapters + headings are rendered
//need to fix panels and how headings, panels are rendered

function ResourcesLayout() {
  return (
    <StyledResourcesLayout>
      <Row direction="horizontal">
        <Sidebar menuItems={menuItems} />

        <StyledPanels>
          <Heading as="h1">RESOURCES</Heading>
          {menuItems.map((menuSection) => (
            <React.Fragment key={menuSection.label}>
              <StyledHeading as="h2">
                {menuSection.label.toUpperCase()}
              </StyledHeading>

              {menuSection.items.map((item) => (
                <Panel heading={item.label} key={item.label}>
                  Panel content
                </Panel>
              ))}
            </React.Fragment>
          ))}
        </StyledPanels>
      </Row>
    </StyledResourcesLayout>
  );
}

export default ResourcesLayout;
