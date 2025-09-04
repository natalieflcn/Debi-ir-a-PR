import Sidebar from "../../ui/elements/Sidebar";
import Row from "../../ui/elements/Row";
import styled from "styled-components";
import Panel from "../../ui/elements/Panel";

const StyledResourcesLayout = styled.div`
  display: grid;
`;

const StyledPanels = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: start;
  gap: 1rem;
  --panel-bg-color: var(--color-light-100);
  --panel-heading-color: var(--color-blue-200);
  --panel-color: var(--color-dark-200);
`;

// const menuItems = [
//   { label: "Learn More About the Island", heading: "h1", link: "/resources" },
//   { label: "Brush Up on Your Spanish", heading: "h3", link: "/resources" },
//   {
//     label: "Dive into Puerto Rican History",
//     heading: "h3",
//     link: "/resources",
//   },
//   { label: "Support the Island", heading: "h1", link: "/resources" },
//   {
//     label: "Donate to Puerto Rican Organizations",
//     heading: "h3",
//     link: "/resources",
//   },
//   { label: "Sign Petition", heading: "h3", link: "/resources" },
//   {
//     label: "Keep Up with Puerto Rican News",
//     heading: "h3",
//     link: "/resources",
//   },
// ];

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
          {menuItems.map((item) => (
            <Panel heading={item.label} headingType={item.heading}>
              Panel content
            </Panel>
          ))}
        </StyledPanels>
      </Row>
    </StyledResourcesLayout>
  );
}

export default ResourcesLayout;
