import Heading from "../../ui/elements/Heading";
import Sidebar from "../../ui/elements/Sidebar";
import Row from "../../ui/elements/Row";
import styled from "styled-components";

const StyledResourcesLayout = styled.div`
  display: grid;
`;

const menuItems = [
  { label: "Learn More About the Island", heading: "h1", link: "/resources" },
  { label: "Brush Up on Your Spanish", heading: "h2", link: "/resources" },
  {
    label: "Understand Puerto Rican History",
    heading: "h2",
    link: "/resources",
  },
  { label: "Support the Island", heading: "h1", link: "/resources" },
  {
    label: "Donate to Puerto Rican Organizations",
    heading: "h2",
    link: "/resources",
  },
  { label: "Sign Petition", heading: "h2", link: "/resources" },
  {
    label: "Keep Up with Puerto Rican News",
    heading: "h2",
    link: "/resources",
  },
];
function ResourcesLayout() {
  return (
    <StyledResourcesLayout>
      <Row direction="horizontal">
        <Sidebar menuItems={menuItems} />
        <Row>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resourcescccccc</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
          <Heading as="h1">Resources</Heading>
        </Row>
      </Row>
    </StyledResourcesLayout>
  );
}

export default ResourcesLayout;
