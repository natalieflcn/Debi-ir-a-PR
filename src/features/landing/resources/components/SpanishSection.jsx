import Row from "../../../../shared/components/layout/Row";
import Table from "../../../../shared/components/ui/Table";
import Card from "../../../../shared/components/layout/Card";
import styled from "styled-components";

const spanishVocab = {
  columns: [
    {
      id: "spanish",
      heading: "Spanish",
    },
    {
      id: "english",
      heading: "English",
    },
  ],
  rows: [
    { spanish: "Qué es la qué hay?", english: "What's up?" },
    { spanish: "Buen provecho!", english: "Enjoy your meal!" },
    { spanish: "Vamos a chinchorrear!", english: "Let's go bar hopping!" },
    { spanish: "Diantre!", english: "Damn!" },
    { spanish: "En verdad?", english: "For real?" },
    { spanish: "Bonchinche", english: "Gossip" },
    { spanish: "Eso es embuste!", english: "That's a lie!" },
    { spanish: "Vamos a janguear!", english: "Let's hang out!" },
    { spanish: "Hay mucho tapón.", english: "There's a lot of traffic." },
    { spanish: "Nos vemos ahorita!", english: "We'll see each other soon!" },
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
      ></Table>
      <Card $cardColor={theme.cardBackground} $cardShadow="insetLG">
        <Row>
          These are common words and phrases that you’ll hear in Puerto Rico or
          from the Puerto Rican diaspora.
        </Row>
      </Card>
    </StyledSpanishSection>
  );
}
