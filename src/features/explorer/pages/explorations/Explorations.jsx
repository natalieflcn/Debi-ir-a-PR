import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";

import ExplorationMiniCard from "../../../../shared/components/explorations/ExplorationMiniCard";
import ExplorationsFilters from "../../components/explorations/ExplorationsFilters";
import fakeExplorationsData from "./fakeExplorationsData";

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
const ExplorerExplorationCardButton = {
  buttonName: "Learn More",
  buttonLink: "",
};

function Explorations() {
  return (
    <StyledExplorations>
      <ExplorationsFilters />
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
