import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Link from "../../../../shared/components/ui/Link";
import Image from "../../../../shared/components/ui/Image";
import Bold from "../../../../shared/components/typography/Bold";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { parseBold } from "../../../../shared/utils/helpers";
import {
  StyledBookSection,
  StyledHistorySection,
  StyledVideoSection,
} from "./historySection.styles";
import Card from "../../../../shared/components/layout/Card";

const videos = [
  {
    id: "6sPRFvWOBwo",
    title: "Puerto Rico is Dying: Here's Why",
    description: [
      {
        id: 0,
        sentence:
          "**Puerto Rico is paradise. Beaches, lush mountains, rich culture.**",
      },
      {
        id: 1,
        sentence:
          "But beneath the beauty, there is pain that goes unseen. Nearly half of the population lives below the poverty line – This U.S. territory is the poorest, most unequal part of the United States, and the gap between the wealthy and the poor continues to grow.",
      },
      {
        id: 2,
        sentence:
          "A Puerto Rico without Puerto Ricans is near and this is the story of why.",
      },
    ],
  },
  {
    id: "xb9E8fvMPOA",
    title: "How the U.S. Stole Puerto Rico",
    description: [
      {
        id: 0,
        sentence:
          "After nearly 400 years of Spanish rule, Puerto Ricans hoped for liberation – instead, they became a colony of a foreign power that didn’t even speak their language.",
      },
      {
        id: 1,
        sentence:
          "Surveillance, sabotage, and air strikes on its own citizens.",
      },
      {
        id: 2,
        sentence:
          "Unfold the history of how the United States stole and kept its prized colony in the Caribbean – **Puerto Rico.**",
      },
    ],
  },
  {
    id: "3KLMtxRxTCo",
    title: "History of the Puerto Rican Flag",
    description: [
      {
        id: 0,
        sentence:
          "Ever wonder why Puerto Ricans display their flag with such unshakable pride?",
      },
      {
        id: 1,
        sentence:
          "Take a peek of the flag’s transformations—and why it will always be waved with love and resilience.",
      },
    ],
  },
];

const books = [
  {
    id: "war-against-all-puerto-ricans",
    title: "War Against All Puerto Ricans",
    image: "src/assets/images/content/WarAgainstAllPuertoRicansCover.png",
    goodreadsURL:
      "https://www.goodreads.com/book/show/22928891-war-against-all-puerto-ricans",
    description:
      "Through oral histories, personal interviews, eyewitness accounts, congressional testimony, and recently declassified FBI files, War Against All Puerto Ricans tells the story of a forgotten revolution and its context in Puerto Rico's history, from the US invasion in 1898 to the modern-day struggle for self-determination.",
  },
  {
    id: "the-battle-for-paradise",
    title: "The Battle for Paradise",
    image: "src/assets/images/content/TheBattleForParadiseCover.png",
    goodreadsURL:
      "https://www.goodreads.com/book/show/39791088-the-battle-for-paradise",
    description:
      "In the rubble of Hurricane Maria, Puerto Ricans and ultrarich 'Puertopians' are locked in a pitched struggle over how to remake the island. In this investigation, activist Naomi Klein uncovers how the forces of shock politics and disaster capitalism seek to undermine the nation's radical, resilient vision for a 'just recovery.'",
  },
  {
    id: "aftershocks-of-disaster",
    title: "Aftershocks of Disaster",
    image: "src/assets/images/content/AftershocksOfDisasterCover.png",
    goodreadsURL:
      "https://www.goodreads.com/book/show/45156634-aftershocks-of-disaster",
    description:
      "No disaster is a singular event. Aftershocks of Disaster examines the lasting effects of Hurricane Maria in Puerto Rico, not just the effects of the wind or the rain, but delving into what followed: state failure, social abandonment, capitalization on human misery, and the collective trauma produced by the botched response.",
  },
  {
    id: "matters-of-choice",
    title: "Matters of Choice",
    image: "src/assets/images/content/MattersOfChoiceCover.png",
    goodreadsURL:
      "https://www.goodreads.com/book/show/8962015-matters-of-choice",
    description:
      "Drawing upon her twenty-five years of research on sterilized Puerto Rican women from five different families in Brooklyn, Lopez...[weaves] together the voices of these women, [and] she covers the history of sterilization and eugenics, societal pressures to have fewer children, a lack of adequate health care, patterns of gender inequality, and misinformation provided by doctors and family members.",
  },
  {
    id: "las-carpetas",
    title: "Las Carpetas",
    image: "src/assets/images/content/LasCarpetasCover.png",
    goodreadsURL:
      "https://www.goodreads.com/book/show/240619474-the-story-of-las-carpetas",
    description:
      "By exposing the systematic repression and chronicling the resilience of individuals and families impacted, The Story of Las Carpetas connects past injustices to today’s ongoing battles for privacy and civil liberties. The chilling parallels to modern-day surveillance reveal lessons that resonate beyond Puerto Rico, highlighting a universal struggle against invasive state powers.",
  },
];

const Introduction = function ({ theme }) {
  return (
    <>
      <Card
        $cardColor={theme.cardBackground}
        $cardShadow="insetLG"
        $gap="var(--row-gap-md)"
      >
        <Row>
          Dive into Puerto Rico’s rich history and the journey of how this
          small, vibrant island has captured the world’s attention.
        </Row>

        <Row>
          <p>
            Known as <Bold>La Isla del Encanto</Bold> (The Island of
            Enchantment), Puerto Rico shines with beauty, culture, and
            passion–in spite of the profound challenges the island has survived.
            The joy, love, and unbreakable spirit of Puerto Ricans remain at the
            heart of the island’s identity.
          </p>
        </Row>
        <Row>
          Explore the stories of what Puerto Rico has endured and overcome
          throughout history.
        </Row>
      </Card>
    </>
  );
};
const VideoSection = function ({ id, title, description, theme }) {
  return (
    <Card
      $cardColor={theme.cardBackground}
      $cardShadow="insetLG"
      $gap="var(--row-gap-md)"
    >
      <StyledVideoSection key={id}>
        <Heading as="h4" $color="var(--color-brown-200)">
          {title}
        </Heading>
        <LiteYouTubeEmbed id={id} title={title} lazyLoad={true} />
        {description.map((description) => (
          <SmallText key={description.id}>
            {parseBold(description.sentence)}
          </SmallText>
        ))}
      </StyledVideoSection>
    </Card>
  );
};

const BookSection = function ({ title, image, goodreadsURL, description }) {
  return (
    <StyledBookSection>
      <Row $direction="horizontal" $gap="var(--row-gap-lg)">
        <Link href={goodreadsURL} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={title}
            $width="6rem"
            $height="9rem"
            $borderRadius="0 4px 4px 0"
            $imageShadow="var(--box-shadow-offset-lg) var(--color-brown-200)"
          />
        </Link>
        <figcaption>
          <Row $gap="var(--row-gap-sm)" $direction="vertical">
            <Link href={goodreadsURL} target="_blank" rel="noopener noreferrer">
              <Heading as="h6" $color="var(--color-brown-300)">
                {title}
              </Heading>
            </Link>
            <SmallText>{description}</SmallText>
          </Row>
        </figcaption>
      </Row>
    </StyledBookSection>
  );
};

export default function HistorySection({ theme }) {
  return (
    <StyledHistorySection>
      <Introduction theme={theme} />
      <Row $gap="var(--row-gap-lg)">
        {videos.map((video) => (
          <VideoSection
            key={video.id}
            id={video.id}
            title={video.title}
            description={video.description}
            theme={theme}
          />
        ))}
      </Row>

      <Row>
        <Card
          $cardColor={theme.cardBackground}
          $cardShadow="insetLG"
          $gap="var(--row-gap-md)"
        >
          <Heading as="h4" $color="var(--color-brown-200)">
            Additional Literature
          </Heading>
          <p>
            If you’re interested in learning more about Puerto Rico’s struggles
            and the resilience of its people, these books honor their strength
            and perseverance.
          </p>

          <Row $gap="var(--row-gap-xl)">
            {books.map((book) => (
              <BookSection
                key={book.id}
                title={book.title}
                image={book.image}
                goodreadsURL={book.goodreadsURL}
                description={book.description}
              />
            ))}
          </Row>
        </Card>
      </Row>
    </StyledHistorySection>
  );
}
