import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";

import ExplorationCard from "../../components/explorations/ExplorationCard";
import ExplorationsFilters from "../../components/explorations/ExplorationsFilters";
import fakeExplorationData from "./fakeExplorationsData";

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

function Explorations() {
  return (
    <StyledExplorations>
      <ExplorationsFilters />
      <ExplorationCards>
        {fakeExplorationData.map((exploration) => (
          <ExplorationCard
            name={exploration.name}
            description={exploration.description}
            numStops={exploration.numStops}
            startLocation={exploration.startLocation}
            tourLink={exploration.tourLink}
          />
        ))}
      </ExplorationCards>
    </StyledExplorations>
  );
}

export default Explorations;
