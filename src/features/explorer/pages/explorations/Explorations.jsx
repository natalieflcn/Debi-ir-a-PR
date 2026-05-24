import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";

import ExplorationMiniCard from "../../components/explorations/ExplorationMiniCard";
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
          <ExplorationMiniCard
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
