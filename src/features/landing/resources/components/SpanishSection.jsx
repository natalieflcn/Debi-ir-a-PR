import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Table from "../../../../shared/components/ui/Table";

const spanishVocab = {
  columns: [
    {
      id: "spanish",
      heading: "Spanish",
      headingColor: "--color-red-200",
    },
    {
      id: "english",
      heading: "English",
      headingColor: "--color-blue-200",
    },
  ],
  rows: [
    { spanish: "Qué es la qué hay?", english: "What's up?" },
    { spanish: "Buen provecho!", english: "Enjoy your meal!" },
    { spanish: "Vamos a chincorrear!", english: "Let's go bar hopping!" },
    { spanish: "Diantre!", english: "Damn!" },
    { spanish: "En verdad?", english: "For real?" },
    { spanish: "Bonchinche", english: "Gossip" },
    { spanish: "Eso es embuste!", english: "That's a lie!" },
    { spanish: "Vamos a janguear!", english: "Let's hang out!" },
    { spanish: "Hay mucho tapón.", english: "There's a lot of traffic." },
    { spanish: "Nos vemos ahorita!", english: "We'll see each other soon!" },
  ],
};

const StyledSpanishSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  table {
    box-shadow: 2px 2px 3px var(--color-yellow-300);
    tbody tr:last-child td {
      border-bottom: none;
    }
  }

  th {
    color: var(--color-red-200);

    background-color: var(--color-yellow-100);
    &:nth-child(even) {
      color: var(--color-blue-200);
      background-color: var(--color-light-100);
    }
  }

  td {
    border-bottom: 1px dashed var(--color-yellow-300);
    background-color: var(--color-yellow-0);

    &:nth-child(even) {
      background-color: var(--color-light-0);
    }
  }
`;

export default function SpanishSection() {
  return (
    <StyledSpanishSection>
      <Row>
        Visiting the island soon? Brush up on your Spanish with this cheat
        sheet!
      </Row>
      <Table columns={spanishVocab.columns} rows={spanishVocab.rows}></Table>
      <Row>
        These are common words and phrases that you’ll hear in Puerto Rico or
        from the Puerto Rican diaspora.
      </Row>
    </StyledSpanishSection>
  );
}
