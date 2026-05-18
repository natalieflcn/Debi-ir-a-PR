import Row from "../../../../shared/components/layout/Row";
import Table from "../../../../shared/components/ui/Table";
import Card from "../../../../shared/components/layout/Card";
import styled from "styled-components";
import { IoVolumeHigh } from "react-icons/io5";

function playSpanishAudio(spanishAudio) {
  new Audio(spanishAudio).play();
}

const spanishVocab = {
  columns: [
    {
      id: "spanish",
      heading: "Spanish",
      render: (row) => (
        <SpanishCell>
          <AudioButton onClick={() => playSpanishAudio(row.audio)}>
            <IoVolumeHigh />
          </AudioButton>
          <span>{row.spanish}</span>
        </SpanishCell>
      ),
    },
    {
      id: "english",
      heading: "English",
    },
  ],
  rows: [
    { spanish: "Qué es la qué hay?", english: "What's up?", audio: "" },
    { spanish: "Buen provecho!", english: "Enjoy your meal!", audio: "" },
    {
      spanish: "Vamos a chinchorrear!",
      english: "Let's go bar hopping!",
      audio: "",
    },
    { spanish: "Diantre!", english: "Damn!", audio: "" },
    { spanish: "En verdad?", english: "For real?", audio: "" },
    { spanish: "Bonchinche", english: "Gossip", audio: "" },
    { spanish: "Eso es embuste!", english: "That's a lie!", audio: "" },
    { spanish: "Vamos a janguear!", english: "Let's hang out!", audio: "" },
    {
      spanish: "Hay mucho tapón.",
      english: "There's a lot of traffic.",
      audio: "",
    },
    {
      spanish: "Nos vemos ahorita!",
      english: "We'll see each other soon!",
      audio: "",
    },
  ],
};

const spanishTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-brown-400)",
  headerBackground: "var(--color-yellow-100)",
  headerColor: "var(--color-red-200)",
  headerBackgroundAlt: "var(--color-light-100)",
  headerColorAlt: "var(--color-blue-200)",
  cellBackground: "var(--color-light-200)",
  cellBackgroundAlt: "var(--color-light-0)",
  borderColor: "var(--color-yellow-300)",
};

const StyledSpanishSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SpanishCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const AudioButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-brown-200);
  font-size: 1.2rem;
  display: flex;
  justify-self: flex-start;
  transition: all 0.2s;

  &:hover {
    color: var(--color-red-200);
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export default function SpanishSection({ theme }) {
  return (
    <StyledSpanishSection>
      <Card $cardColor={theme.cardBackground} $cardShadow="insetLG">
        <Row>
          Visiting the island soon? Brush up on your Spanish with this cheat
          sheet!
        </Row>
      </Card>
      <Table
        columns={spanishVocab.columns}
        rows={spanishVocab.rows}
        $theme={spanishTableTheme}
      />
      <Card $cardColor={theme.cardBackground} $cardShadow="insetLG">
        <Row>
          These are common words and phrases that you’ll hear in Puerto Rico or
          from the Puerto Rican diaspora.
        </Row>
      </Card>
    </StyledSpanishSection>
  );
}
