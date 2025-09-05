import Sidebar from "../../ui/elements/Sidebar";
import Row from "../../ui/elements/Row";
import styled from "styled-components";
import PanelGroup from "../../ui/elements/PanelGroup";

const StyledResourcesLayout = styled.div`
  display: grid;
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
        content: `<p>Dive into Puerto Rico’s rich history and the journey of how this small, vibrant island has captured the world’s attention.</p><p>Known as <span>La Isla del Encanto</span> (The Island of Enchantment), Puerto Rico shines with beauty, culture, and passion–in spite of the profound challenges the island has survived. The joy, love, and unbreakable spirit of Puerto Ricans remain at the heart of the island’s identity.</p><p>Explore the stories of what Puerto Rico has endured and overcome throughout history.</p>`,
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
//need to polish mobile view
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
        <PanelGroup menuItems={menuItems} />
      </Row>
    </StyledResourcesLayout>
  );
}

export default ResourcesLayout;
