import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";

import ExplorationMiniCard from "../../../../shared/components/explorations/ExplorationMiniCard";
import ExplorationsFilters from "../../../../shared/components/explorations/ExplorationsFilters";
import fakeExplorationsData from "./fakeExplorationsData";
import Input from "../../../../shared/components/form/Input";
import Row from "../../../../shared/components/layout/Row";
import { useState } from "react";
import Pagination from "../../../../shared/components/ui/Pagination";

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
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  const filteredExplorations = [...fakeExplorationsData].filter(
    (exploration) => {
      if (filterBy === "all") return true;

      return exploration.tags.some((tag) =>
        tag.toLowerCase().includes(filterBy.toLowerCase()),
      );
    },
  );

  const sortedExplorations = [...filteredExplorations].sort((a, b) => {
    if (sortBy === "numStops") return a.numStops - b.numStops;
    else return a.name.localeCompare(b.name);
  });

  return (
    <StyledExplorations>
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Input placeholder="Search for an exploration..." />
        <ExplorationsFilters onSort={setSortBy} onFilter={setFilterBy} />
      </Row>
      <ExplorationCards>
        {sortedExplorations.map((exploration) => (
          <ExplorationMiniCard
            name={exploration.name}
            description={exploration.description}
            numStops={exploration.numStops}
            startLocation={exploration.startLocation}
            buttonDetails={ExplorerExplorationCardButton}
            key={exploration.id}
          />
        ))}
      </ExplorationCards>
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={null}
        $variation="primary"
      />
    </StyledExplorations>
  );
}

export default Explorations;
