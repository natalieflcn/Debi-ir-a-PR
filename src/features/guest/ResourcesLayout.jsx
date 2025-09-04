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
  text-transform: uppercase;
`;

const menuItems = [
  {
    label: "Learn More About the Island",
    link: "/resources",
    items: [
      {
        label: "Brush Up on Your Spanish",
        link: "/resources",
        content: "This panel teaches your Boricua Spanish",
      },
      {
        label: "Dive into Puerto Rican History",
        link: "/resources",
        content: "This panel educates you about why PR is dying",
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
        content: "This panel gives you links to donate",
      },
      {
        label: "Sign Petition",
        link: "/resources",
        content: "This panel directs you to sign a petition",
      },
      {
        label: "Keep Up with Puerto Rican News",
        link: "/resources",
        content: "This panel keeps you up to date on bochinche",
      },
    ],
  },
];

//TODO
//need to connect sidebar menu items to links on panel headings
//need to keep one panel open at a time
//need to create content for each panel item
//need to indicate which panel item is active

//need to create footer
//need to work on About page

function ResourcesLayout() {
  return (
    <StyledResourcesLayout>
      <Row direction="horizontal">
        <Sidebar menuItems={menuItems} />

        <StyledPanels>
          <Heading as="h1">RESOURCES</Heading>
          {menuItems.map((menuSection) => (
            <React.Fragment key={menuSection.label}>
              <StyledHeading as="h2">{menuSection.label}</StyledHeading>

              {menuSection.items.map((item) => (
                <Panel heading={item.label} key={item.label}>
                  {item.content}
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
