import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";

import ExplorationMiniCard from "../../../explorations/components/ExplorationMiniCard";
import ExplorationsFilters from "../../../explorations/components/ExplorationsFilters";

import Input from "../../../../shared/components/form/Input";
import Row from "../../../../shared/components/layout/Row";
import { useEffect, useState } from "react";
import Pagination from "../../../../shared/components/ui/Pagination";
import { useLoaderData } from "react-router-dom";
import Bold from "../../../../shared/components/typography/Bold";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllMyExplorationProgress,
  getExplorationProgress,
} from "../../../../services/explorationProgress";
import Spinner from "../../../../shared/components/ui/Spinner";

const StyledExplorations = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

const ExplorationCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-xl);
  justify-content: center;
`;

const ExplorationFiltersRow = styled(Row)`
  @media (max-width: 980px) {
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`;

const ExplorerExplorationCardButton = function (explorationSlug, progress) {
  let buttonId,
    buttonVariation,
    buttonName = "";

  switch (progress) {
    case "in_progress":
      buttonId = "continue";
      buttonVariation = "yellow";
      buttonName = "Continue Exploring";
      break;

    case "completed":
      buttonId = "completed";
      buttonVariation = "treeLeaf";
      buttonName = "Completed";
      break;

    case undefined:
    default:
      buttonId = "learn-more";
      buttonVariation = "primary";
      buttonName = "Learn More";
      break;
  }

  return [
    {
      id: buttonId,
      buttonVariation: buttonVariation,
      buttonName: buttonName,
      buttonLink: `/explorations/${explorationSlug}`,
    },
  ];
};

const ITEMS_PER_PAGE = 9;

function Explorations() {
  const [sortBy, setSortBy] = useState("createdAt");
  const [filterBy, setFilterBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFeatured, setShowFeatured] = useState(false);
  const { explorations } = useLoaderData();

  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["allExplorationProgress"],
    queryFn: getAllMyExplorationProgress,
  });
  // const QueryClient = useQueryClient();

  const userHistory = data?.data?.data ?? [];

  const filteredExplorations = [...explorations].filter((exploration) => {
    if (filterBy === "all") return true;

    return exploration.tags.some((tag) =>
      tag.toLowerCase().includes(filterBy.toLowerCase()),
    );
  });

  const sortedExplorations = [...filteredExplorations].sort((a, b) => {
    switch (sortBy) {
      case "numStops":
        return a.numStops - b.numStops;

      case "name":
        return a.name.localeCompare(b.name);

      case "createdAt":
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const featuredExplorations = [...sortedExplorations].filter(
    (exploration) => exploration.featured,
  );

  const totalPages = Math.ceil(sortedExplorations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedExplorations = showFeatured
    ? featuredExplorations.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    : sortedExplorations.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, filterBy]);

  return (
    <>
      {isPending && <Spinner />}

      {isError && <span>Error: {error.message}</span>}

      {isSuccess && (
        <StyledExplorations>
          <ExplorationFiltersRow $direction="horizontal" $gap="var(--gap-lg)">
            <Input placeholder="Search for an exploration..." />
            <ExplorationsFilters
              onSort={setSortBy}
              onFilter={setFilterBy}
              showFeatured={showFeatured}
              onShowFeatured={setShowFeatured}
            />
          </ExplorationFiltersRow>

          <ExplorationCards>
            {paginatedExplorations.map((exploration) => {
              const city =
                exploration.cities.length === 1
                  ? exploration.cities[0]
                  : "Multiple Cities";

              const progress = userHistory.find(
                (entry) => entry.exploration === exploration._id,
              )?.status;

              return (
                <ExplorationMiniCard
                  exploration={exploration}
                  city={city}
                  buttonDetails={ExplorerExplorationCardButton(
                    exploration.slug,
                    progress,
                  )}
                  key={exploration.id}
                />
              );
            })}
          </ExplorationCards>

          {paginatedExplorations.length === 0 && (
            <Row $align="center">
              <Bold $color="var(--color-light-0)">
                There are no explorations to show.
              </Bold>
            </Row>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            $variation="primary"
          />
        </StyledExplorations>
      )}
    </>
  );
}

export default Explorations;
