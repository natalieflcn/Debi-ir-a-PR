import Sidebar from "../../ui/elements/Sidebar";
import Row from "../../ui/elements/Row";
import styled from "styled-components";
import PanelGroup from "../../ui/elements/PanelGroup";
import {
  ResourcesColors,
  ResourcesComponents,
} from "../../styles/ResourcesStyles";

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
        content: `<p>Dive into Puerto Rico’s rich history and the journey of how this small, vibrant island has captured the world’s attention.</p><p>Known as <span>La Isla del Encanto</span> (The Island of Enchantment), Puerto Rico shines with beauty, culture, and passion–in spite of the profound challenges the island has survived. The joy, love, and unbreakable spirit of Puerto Ricans remain at the heart of the island’s identity.</p><p>Explore the stories of what Puerto Rico has endured and overcome throughout history.</p><p><h3>Puerto Rico is Dying: Here's Why</h3>video</p><p><h3>How the U.S. Stole Puerto Rico</h3>video</p><p><h3>History of the Puerto Rican Flag</h3>video</p><h3>Additional Literature</h3><p>If you’re interested in learning more about Puerto Rico’s struggles and the resilience of its people, these books honor their strength and perseverance.</p><p><h4>War Against All Puerto Ricans</h4>Through oral histories, personal interviews, eyewitness accounts, congressional testimony, and recently declassified FBI files, War Against All Puerto Ricans tells the story of a forgotten revolution and its context in Puerto Rico's history, from the US invasion in 1898 to the modern-day struggle for self-determination.</p><p><h4>The Battle for Paradise</h4>In the rubble of Hurricane Maria, Puerto Ricans and ultrarich "Puertopians" are locked in a pitched struggle over how to remake the island. In this vital and startling investigation, bestselling author and activist Naomi Klein uncovers how the forces of shock politics and disaster capitalism seek to undermine the nation's radical, resilient vision for a "just recovery."</p><p><h4>Aftershocks of Disaster</h4>No disaster is a singular event. Aftershocks of Disaster examines the lasting effects of Hurricane Maria in Puerto Rico, not just the effects of the wind or the rain, but delving into what followed: state failure, social abandonment, capitalization on human misery, and the collective trauma produced by the botched response. The book links the devastation to colonialism.</p><p><h4>Matters of Choice: Puerto Rican Women's Struggle for Reproductive Freedom</h4>Drawing upon her twenty-five years of research on sterilized Puerto Rican women from five different families in Brooklyn, Lopez untangles the interplay between how women make fertility decisions and their social, economic, cultural, and historical constraints. Weaving together the voices of these women, she covers the history of sterilization and eugenics, societal pressures to have fewer children, a lack of adequate health care, patterns of gender inequality, and misinformation provided by doctors and family members.</p><p><h4>The Story of Las Carpetas</h4>By exposing the systematic repression and chronicling the resilience of individuals and families impacted, The Story of Las Carpetas connects past injustices to today’s ongoing battles for privacy and civil liberties. The chilling parallels to modern-day surveillance reveal lessons that resonate beyond Puerto Rico, highlighting a universal struggle against invasive state powers. Listeners will feel the weight of surveillance’s psychological toll and the collective trauma it imprinted on generations, leading them to reflect on the value of freedom and the courage required to safeguard it.
</p>`, //need to figure out how to incorporate images, videos, and headings into this markdown text
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
        <PanelGroup
          menuItems={menuItems}
          components={ResourcesComponents}
          colors={ResourcesColors}
        />
      </Row>
    </StyledResourcesLayout>
  );
}

export default ResourcesLayout;
