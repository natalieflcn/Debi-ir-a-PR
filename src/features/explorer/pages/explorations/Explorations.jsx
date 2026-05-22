import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";
import ExplorationsFilters from "../../../explorations/ExplorationsFilters";

const StyledExplorations = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

const ExplorationCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-lg);
`;
const ExplorationCard = styled(Card)`
  background-image: url("src/assets/images/content/TEMP.png");
  /* width: 28%; */
  align-items: flex-start;
  min-width: 28%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  background-color: var(color-light-0);
  color: var(--color-dark-200);
`;

function Explorations() {
  return (
    <StyledExplorations>
      <ExplorationsFilters />
      <ExplorationCards>
        <ExplorationCard>hii</ExplorationCard>
        <ExplorationCard>hii</ExplorationCard>
        <ExplorationCard>hii</ExplorationCard>
        <ExplorationCard>hii</ExplorationCard>
      </ExplorationCards>
    </StyledExplorations>
  );
}

export default Explorations;
