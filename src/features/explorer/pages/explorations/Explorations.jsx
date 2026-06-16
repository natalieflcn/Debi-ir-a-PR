import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";

import ExplorationMiniCard from "../../../../shared/components/explorations/ExplorationMiniCard";
import ExplorationsFilters from "../../../../shared/components/explorations/ExplorationsFilters";
import fakeExplorationsData from "./fakeExplorationsData";
import Input from "../../../../shared/components/form/Input";
import Row from "../../../../shared/components/layout/Row";

const StyledExplorations = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

const ExplorationCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-2xl);
`;
const ExplorerExplorationCardButton = [
  {
    id: "learn-more",
    buttonVariation: "primary",
    buttonName: "Learn More ",
    buttonLink: "/explorations/:explorationId",
  },
];

function Explorations() {
  return (
    <StyledExplorations>
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Input placeholder="Search for an exploration..." />
        <ExplorationsFilters />
      </Row>
      <ExplorationCards>
        {fakeExplorationsData.map((exploration) => (
          <ExplorationMiniCard
            name={exploration.name}
            description={exploration.description}
            numStops={exploration.numStops}
            startLocation={exploration.startLocation}
            buttonDetails={ExplorerExplorationCardButton}
          />
        ))}
      </ExplorationCards>
    </StyledExplorations>
  );
}

export default Explorations;
