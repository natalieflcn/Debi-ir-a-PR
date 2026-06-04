import styled from "styled-components";
import ExplorationsFilters from "../../../explorer/components/explorations/ExplorationsFilters";
import ExplorationMiniCard from "../../../../shared/components/explorations/ExplorationMiniCard";
import fakeExplorationsData from "../../../explorer/pages/explorations/fakeExplorationsData";

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

const AmbassadorExplorationCardButton = {
  buttonName: "View and Edit Exploration",
  buttonLink: "",
};

function ManageExplorations() {
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
            buttonDetails={AmbassadorExplorationCardButton}
            key={exploration.id}
          />
        ))}
      </ExplorationCards>
    </StyledExplorations>
  );
}

export default ManageExplorations;
