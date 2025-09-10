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
        id: 0,
        label: "Brush Up on Your Spanish",
        link: "/resources",
        content: "This panel teaches your Boricua Spanish",
      },
      {
        id: 1,
        label: "Dive into Puerto Rican History",
        link: "/resources",
        content: `<p>Dive into Puerto Rico’s rich history and the journey of how this small, vibrant island has captured the world’s attention.</p><p>Known as <span>La Isla del Encanto</span> (The Island of Enchantment), Puerto Rico shines with beauty, culture, and passion–in spite of the profound challenges the island has survived. The joy, love, and unbreakable spirit of Puerto Ricans remain at the heart of the island’s identity.</p><p>Explore the stories of what Puerto Rico has endured and overcome throughout history.</p><h3>Puerto Rico is Dying: Here's Why</h3><iframe src="https://www.youtube.com/embed/6sPRFvWOBwo" frameborder="0"></iframe><p><span>Puerto Rico is paradise.</span> Beaches, lush mountains, rich culture.</p><p>But beneath the beauty, there is pain that goes unseen. Nearly half of the population lives below the poverty line – This U.S. territory is the poorest, most unequal part of the United States, and the gap between the wealthy and the poor continues to grow.</p><p>A Puerto Rico without Puerto Ricans is near and this is the story of why.</p><h3>How the U.S. Stole Puerto Rico</h3><iframe src="https://www.youtube.com/embed/xb9E8fvMPOA" frameborder="0"></iframe><p>After nearly 400 years of Spanish rule, Puerto Ricans hoped for liberation – instead, they became a colony of a foreign power that didn’t even speak their language.</p><p>Surveillance, sabotage, and air strikes on its own citizens.</p><p>Unfold the history of how the United States stole and kept its prized colony in the Caribbean – <span>Puerto Rico</span>.</p><h3>History of the Puerto Rican Flag</h3><iframe src="https://www.youtube.com/embed/3KLMtxRxTCo" frameborder="0"></iframe><p>Ever wonder why Puerto Ricans display their flag with such unshakable pride?</p><p>Take a peek of the flag’s transformations—and why it will always be waved with love and resilience.</p><h3>Additional Literature</h3><p>If you’re interested in learning more about Puerto Rico’s struggles and the resilience of its people, these books honor their strength and perseverance.</p><a href="https://www.goodreads.com/book/show/22928891-war-against-all-puerto-ricans" target="_blank" rel="noopener noreferrer"><figure><img src="src/assets/images/guest/WarAgainstAllPuertoRicansCover.png"><figcaption><h4>War Against All Puerto Ricans</h4>Through oral histories, personal interviews, eyewitness accounts, congressional testimony, and recently declassified FBI files, War Against All Puerto Ricans tells the story of a forgotten revolution and its context in Puerto Rico's history, from the US invasion in 1898 to the modern-day struggle for self-determination.</figcaption></figure></a><a href="https://www.goodreads.com/book/show/39791088-the-battle-for-paradise" target="_blank" rel="noopener noreferrer"><figure><img src="src/assets/images/guest/TheBattleForParadiseCover.png"><figcaption><h4>The Battle for Paradise</h4>In the rubble of Hurricane Maria, Puerto Ricans and ultrarich "Puertopians" are locked in a pitched struggle over how to remake the island. In this investigation, activist Naomi Klein uncovers how the forces of shock politics and disaster capitalism seek to undermine the nation's radical, resilient vision for a "just recovery."</figcaption></figure></a><a href="https://www.goodreads.com/book/show/45156634-aftershocks-of-disaster" target="_blank" rel="noopener noreferrer"><figure><img src="src/assets/images/guest/AftershocksOfDisasterCover.png"><figcaption><h4>Aftershocks of Disaster</h4>No disaster is a singular event. Aftershocks of Disaster examines the lasting effects of Hurricane Maria in Puerto Rico, not just the effects of the wind or the rain, but delving into what followed: state failure, social abandonment, capitalization on human misery, and the collective trauma produced by the botched response.</figcaption></figure></a><a href="https://www.goodreads.com/book/show/8962015-matters-of-choice" target="_blank" rel="noopener noreferrer"><figure><img src="src/assets/images/guest/MattersOfChoiceCover.png"><figcaption><h4>Matters of Choice</h4>Drawing upon her twenty-five years of research on sterilized Puerto Rican women from five different families in Brooklyn, Lopez...[weaves] together the voices of these women, [and] she covers the history of sterilization and eugenics, societal pressures to have fewer children, a lack of adequate health care, patterns of gender inequality, and misinformation provided by doctors and family members.</figcaption></figure></a><a href="https://www.goodreads.com/book/show/240619474-the-story-of-las-carpetas" target="_blank" rel="noopener noreferrer"><figure><img src="src/assets/images/guest/LasCarpetasCover.png"><figcaption><h4>The Story of Las Carpetas</h4>By exposing the systematic repression and chronicling the resilience of individuals and families impacted, The Story of Las Carpetas connects past injustices to today’s ongoing battles for privacy and civil liberties. The chilling parallels to modern-day surveillance reveal lessons that resonate beyond Puerto Rico, highlighting a universal struggle against invasive state powers.</figcaption></figure></a>`,
      },
    ],
  },
  {
    label: "Support the Island",
    link: "/resources",
    items: [
      {
        id: 2,
        label: "Donate to Puerto Rican Organizations",
        link: "/resources",
        content: `<figure><img src="src/assets/images/guest/PuertoRicanParadise.webp"><figcaption>While most people imagine Puerto Rico to be a tropical paradise; an island where there’s never a bad day to stretch on the beach, take a sip of coquito, and relax to the sound of coquis…</figcaption></figure><figure><figcaption>Many communities are still living with the long-lasting effects of Hurricane María and the relentless storms that have followed. Frequent blackouts, abandoned homes, rising costs of living, and an unlivable minimum wage continue to challenge the resilience of Puerto Ricans.</figcaption><img src="src/assets/images/guest/HurricaneMaria.webp"><p>The island may have the world’s admiration, but it also needs the world’s support.<p/><p>Here are some organizations making a direct impact, where your donation can truly help:</p><figure><img src="src/assets/images/guest/FundacionComunitaria.png"><figcaption><h4>Fundación Comunitaria de Puerto Rico</h4><p>Since 1985, this foundation has been dedicated to fostering community development across the island. Working with individuals, corporations, and nonprofits, they support initiatives in housing, economic growth, education, food and water access, and renewable energy.</p><div><button>Donate Now</button><button>Learn More</button></div><figcaption></figure><figure><img src="src/assets/images/guest/ComedoresSociales.png"><figcaption><h4>Comedores Sociales de Puerto Rico</h4><p>This organization fights hunger and food insecurity by taking a community-first approach. Through mutual aid centers and community kitchens, they empower neighborhoods to feed themselves and build resilience from the ground up.</p><div><button>Donate Now</button><button>Learn More</button></div></figcaption><figure><img src="src/assets/images/guest/PRxPR.png"><figcaption><h4>PRxPR</h4><p>Founded by Puerto Ricans in the diaspora after Hurricanes María and Irma, PRxPR ensures that 100% of donations go directly to affected communities. Their focus is on food and agriculture, clean water, and renewable energy projects that create long-term sustainability.</p><div><button>Donate Now</button><button>Learn More</button></div></figcaption></figure>
`,
      },
      {
        id: 3,
        label: "End Act 20-22-60",
        link: "/resources",
        content: "This panel directs you to sign a petition",
      },
      {
        id: 4,
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
